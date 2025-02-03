"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { getInvoice } from "@/utils/stripe/stripe-actions";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

type InvoiceData = {
  id: number;
  payDate: Date;
  amount: number;
  status: string;
  userId: string;
  stripeRef: string;
  planMembers: string;
};

export default function Invoices() {
  const searchParams = useSearchParams();
  const [invoiceData, setInvoiceData] = useState<InvoiceData[] | null>(null);

  useEffect(() => {
    if ((searchParams.get("tab") || "") !== "3") return;

    const fetchInvoice = async () => {
      NProgress.start(); // Start progress bar

      try {
        const data = await getInvoice();
        setInvoiceData(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      } finally {
        NProgress.done(); // Stop progress bar
      }
    };

    fetchInvoice();
  }, [searchParams]);

  return (
    <div className="mx-auto rounded-lg">
      <div className="flex items-center mb-4 space-x-2">
        <span className="text-xl font-bold">Invoices</span>
      </div>
      <div className="max-h-96 overflow-y-scroll">
        <table className="table table-xs">
          <thead>
            <tr className="text-gray-400">
              <th>Date</th>
              <th>Amount</th>
              <th>Plan Members</th>
              <th>Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData && invoiceData.length > 0 ? (
              invoiceData.map((invoice, index) => (
                <tr key={index}>
                  <td>{new Date(invoice.payDate).toLocaleDateString()}</td>
                  <td>{invoice.amount}.00$</td>
                  <td>{invoice.planMembers}</td>
                  <td>{invoice.stripeRef}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-4">
                  {!invoiceData
                    ? "Loading invoices..."
                    : "You haven’t made any purchases yet."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

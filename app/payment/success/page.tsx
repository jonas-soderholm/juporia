"use client";

import { CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentSuccess() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const userData = await getUserAuth();
      console.log(userData);

      if (!userData || !userData.email) {
        router.push("/sign-in");
        return;
      }

      setLoading(false);
    }

    fetchUser();
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex items-center justify-center mt-16 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card bg-white shadow-xl rounded-2xl p-6 max-w-md text-center">
          <div className="flex flex-col items-center">
            <CheckCircleIcon className="w-16 h-16 text-green-500" />
            <h2 className="text-2xl font-semibold mt-2 text-gray-600">
              Success!
            </h2>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/courses">
              <button className="btn bg-blue-600 text-slate-200 px-4 py-2 hover:bg-blue-900 hover:text-slate-200 rounded-full border-none w-full">
                Courses
              </button>
            </Link>
            <Link href="/account?tab=3">
              <button className="btn text-gray-600 bg-transparent px-4 py-2 rounded-full border-blue-600 border-2 hover:text-gray-500 hover:bg-transparent hover:border-blue-600">
                Your Invoices
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

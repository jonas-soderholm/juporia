"use client";

import { XCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { LogoName } from "@/constants/logo-name";
import { getUserAuth } from "@/utils/user-actions/get-user";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentFailed() {
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
        <div className="card bg-white shadow-xl rounded-2xl p-6 max-w-md text-center gap-4  rr">
          <div className="flex flex-col items-center">
            <XCircleIcon className="w-16 h-16 text-red-500" />
            <h2 className="text-2xl font-semibold mt-2 text-gray-600">
              Payment Failed
            </h2>
          </div>
          <p className="text-gray-600 mt-2">
            Unfortunately, we couldn't process your payment.
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Please check your payment details and try again.
          </p>

          <p className="text-gray-500 text-sm mt-1">
            For support contact: {LogoName.supportMail}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import MainLayout from "@/components/mainLayout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>About Us</h1>
          <p>We are a leading IT company providing top-notch solutions.</p>
        </motion.div>
      </div>
    </div>
  );
}

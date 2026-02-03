import React from "react";
import { motion } from "framer-motion";

const HeaderSection: React.FC = () => {
  return (
    <header className="relative py-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative px-6">
        {/* Logo on top-left */}
        <motion.img
          src="/logo.svg"
          alt="LemonPay Expense Logo"
          className="absolute -top-20 -left-47 w-32 h-32 md:w-40 md:h-40 object-contain"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Title centered */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LemonPay Expense
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg md:text-xl mt-2 text-center"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Manage your business finances efficiently
          </motion.p>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderSection;

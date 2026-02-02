import React from "react";
import { motion } from "framer-motion";

const HeaderSection: React.FC = () => {
  return (
    <header className="bg-white py-6 shadow-md rounded-xl overflow-hidden">
      <div className="max-w-5xl mx-auto flex justify-center px-6">
        {/* Logo and Title */}
        <motion.div
          className="flex items-center space-x-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src="/logo.png"
            alt="LemonPay Expense Logo"
            className="w-28 h-28 md:w-36 md:h-36 object-contain"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <div className="text-left">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              LemonPay Expense
            </motion.h1>
            <motion.p
              className="text-gray-600 text-base md:text-lg mt-1"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Manage your business finances efficiently
            </motion.p>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeaderSection;

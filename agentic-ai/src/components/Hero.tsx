"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wallet, PieChart, Bot } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-gray-900 min-h-screen text-white flex flex-col justify-center items-center px-6 pt-24 pb-32">
      {/* Animated glow background */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-green-500 opacity-20 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-green-400 to-teal-300 text-transparent bg-clip-text">
          Meet Project Raseed
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300">
          Your AI-powered receipt assistant that turns shopping data into smart financial insights — right inside Google Wallet.
        </p>

        {/* Call to Action */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-400 text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-300 transition"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl text-white font-medium border border-white/20 hover:bg-white/20 transition"
          >
            Watch Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Feature Icons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4, scale: 1.02 }}
            className="p-4 border border-white/10 rounded-xl backdrop-blur-md bg-white/5 transition"
          >
            <feature.icon className="mx-auto text-green-400 h-8 w-8 mb-2" />
            <h3 className="text-sm font-medium">{feature.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const features = [
  { title: "Smart Receipts", icon: Wallet },
  { title: "AI Insights", icon: Bot },
  { title: "Spending Analysis", icon: PieChart },
  { title: "Actionable Tips", icon: Lightbulb },
];

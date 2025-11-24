import React from 'react';
import { motion } from 'motion/react';
import { Laptop, MessageSquare, ShoppingBag, Wallet, Smartphone } from 'lucide-react';

export function LogoCloud() {
  const logos = [
    { name: 'Lenovo', icon: Laptop, color: 'text-red-500', bg: 'bg-red-50' },
    { name: 'Slack', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { name: 'Shopify', icon: ShoppingBag, color: 'text-green-600', bg: 'bg-green-50' },
    { name: 'PayPal', icon: Wallet, color: 'text-blue-600', bg: 'bg-blue-50' },
    { name: 'Samsung', icon: Smartphone, color: 'text-blue-800', bg: 'bg-blue-100' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            2500+ Trusted by the world's most ambitious teams
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, opacity: 1, filter: "grayscale(0%)" }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl ${logo.bg} dark:bg-gray-800 grayscale transition-all duration-300 cursor-pointer`}
            >
              <logo.icon className={`w-5 h-5 ${logo.color} dark:text-gray-300`} strokeWidth={2.5} />
              <span className={`font-bold text-lg ${logo.color} dark:text-gray-300`}>{logo.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

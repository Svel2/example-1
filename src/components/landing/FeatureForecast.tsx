import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Star, User } from 'lucide-react';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 70 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 80 },
];

const avatars = [
  "https://images.unsplash.com/photo-1594318223885-20dc4b889f9e?auto=format&fit=crop&w=50&h=50",
  "https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?auto=format&fit=crop&w=50&h=50",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=50&h=50",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50",
];

export function FeatureForecast() {
  return (
    <section className="py-20 bg-gray-50/50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-indigo-600 font-semibold mb-2">More than you think</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Viewing long-term and <br /> short-term forecast
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full">

          {/* Left Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3 bg-gray-100 dark:bg-gray-800 rounded-[2rem] p-8 relative overflow-hidden min-h-[500px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div className="max-w-md z-10 relative">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
                Unlock Opportunities and Experience the Future of Finance Today
              </h3>
            </div>

            {/* Chart Card Overlay */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative z-10 bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg w-full max-w-sm mx-auto lg:mx-0 mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg">12m review</h4>
                <div className="flex -space-x-2">
                  {avatars.slice(0, 3).map((src, i) => (
                    <img key={i} src={src} className="w-6 h-6 rounded-full border-2 border-white" alt="" />
                  ))}
                </div>
              </div>
              <div className="h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 5 ? '#6366f1' : '#e5e7eb'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg">
                    <User className="w-5 h-5 text-gray-600 dark:text-gray-200" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-300">Customers Feedback</p>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-full p-2 px-4 flex items-center gap-2">
                  <img src={avatars[0]} className="w-6 h-6 rounded-full" alt="CEO" />
                  <div className="text-xs">
                    <p className="font-bold">Mark W.</p>
                    <p className="text-gray-500 dark:text-gray-300">CEO</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <Button className="w-fit bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-200 rounded-full px-8 py-6 z-10 transition-transform hover:scale-105">
              Explore Now
            </Button>

            {/* Decorative Circle */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-100 rounded-full opacity-50 pointer-events-none"
            ></motion.div>
          </motion.div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black text-white rounded-[2rem] p-8 flex flex-col justify-center h-3/5 relative overflow-hidden group"
            >
              <p className="text-xl font-medium leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors">
                "There is a high rating of us among our users. Financial improvement is only possible with PayView"
              </p>
              <div className="mt-6 flex items-center justify-end">
                <span className="text-sm text-gray-400">- Dorian Mark</span>
              </div>
              {/* Abstract shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-bl-full opacity-50 transition-transform duration-500 group-hover:scale-110"></div>
            </motion.div>

            {/* Clients Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-purple-100 dark:bg-gray-800 rounded-[2rem] p-8 flex flex-col justify-center h-2/5 cursor-pointer"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Our Trusted Clients</h4>
              <div className="flex -space-x-4 overflow-hidden py-2">
                {avatars.map((src, i) => (
                  <motion.img
                    whileHover={{ y: -5, zIndex: 10 }}
                    key={i} src={src} className="inline-block h-12 w-12 rounded-full ring-2 ring-white object-cover" alt=""
                  />
                ))}
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center ring-2 ring-white text-xs font-bold text-gray-500">
                  +2k
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

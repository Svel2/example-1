import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowUpRight, TrendingUp, CreditCard } from 'lucide-react';

const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const PhoneMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        {/* Screen Content */}
        <div className="flex flex-col h-full bg-white dark:bg-gray-800 relative">
          {/* App Header */}
          <div className="pt-12 px-6 pb-4 flex justify-between items-center">
            <div className="h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <div className="h-4 w-4 bg-indigo-500 rounded-full"></div>
            </div>
            <div className="h-8 w-8 bg-gray-100 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100" alt="User" />
            </div>
          </div>

          {/* Balance */}
          <div className="px-6 mt-4">
            <p className="text-sm text-gray-500">Total Balance</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">$ 29,325.68</h3>
            <div className="flex items-center gap-1 mt-2 text-green-500 bg-green-50 w-fit px-2 py-1 rounded-full">
              <ArrowUpRight size={14} />
              <span className="text-xs font-semibold">+2.5%</span>
            </div>
          </div>

          {/* Chart */}
          <div className="h-40 mt-8 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Transactions */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-t-[2rem] mt-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Transactions</h4>
              <span className="text-xs text-indigo-600 cursor-pointer">See All</span>
            </div>

            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm text-indigo-600">
                  <CreditCard size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Payment Received</p>
                  <p className="text-xs text-gray-500">Today, 12:30 PM</p>
                </div>
                <span className="text-sm font-bold text-green-600">+$450.00</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    className={`absolute bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 ${className}`}
  >
    {children}
  </motion.div>
);

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[128px] -z-10 opacity-30 -translate-x-1/2 -translate-y-1/2"
      ></motion.div>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[128px] -z-10 opacity-30 translate-x-1/2 translate-y-1/2"
      ></motion.div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-white to-transparent opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              Revolutionize Your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x bg-[length:200%_auto]">
                Payment Experience
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Our platform is designed to provide a seamless and comprehensive
              experience for buying, trading, and investing in digital assets.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg shadow-indigo-200 transition-all hover:scale-105">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-2 border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 px-8 py-6 text-lg text-gray-700 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 transition-all">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Phone */}
            <PhoneMockup />

            {/* Floating Elements */}
            <FloatingCard className="top-20 -left-12 hidden sm:block w-48">
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1704726135027-9c6f034cfa41?auto=format&fit=crop&w=50&h=50" className="w-10 h-10 rounded-full object-cover" alt="User" />
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Diane O.</p>
                  <p className="text-[10px] text-gray-500">Just invested!</p>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="bottom-32 -right-8 hidden sm:block w-56">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500">Weekly Profit</p>
                  <p className="text-lg font-bold text-indigo-600">+$1,240</p>
                </div>
                <div className="h-8 w-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData.slice(0, 5)}>
                      <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} fill="none" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </FloatingCard>

            {/* Background glow behind phone */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full blur-[100px] -z-10 opacity-30"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

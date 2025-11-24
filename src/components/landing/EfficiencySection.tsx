import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { Wallet, PiggyBank, Megaphone, Headphones, TrendingUp } from 'lucide-react';

const chartData = [
  { name: 'Mon', value: 2000 },
  { name: 'Tue', value: 4000 },
  { name: 'Wed', value: 3000 },
  { name: 'Thu', value: 5500 },
  { name: 'Fri', value: 4500 },
  { name: 'Sat', value: 7000 },
  { name: 'Sun', value: 6000 },
];

const ServiceCard = ({ icon: Icon, title, description, colorClass, iconBg }: any) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    className={`p-6 rounded-2xl ${colorClass} h-full flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md`}
  >
    <div className={`w-12 h-12 rounded-xl ${iconBg} dark:bg-gray-700 flex items-center justify-center`}>
      <Icon className="w-6 h-6 text-gray-900 dark:text-gray-100" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function EfficiencySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Seamlessly Connect Different Blockchains For Efficiency
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
              Dramatically reintermediate effective applications after high-payoff core competence. Authoritatively optimize collaborative benefits.
            </p>
            <Button variant="outline" className="rounded-full px-6 border-gray-300">
              Learn More
            </Button>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >

          {/* Left Column (2x2 Grid) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              icon={Wallet}
              title="Funds Transfer"
              description="Most extensive credit line for larger living."
              colorClass="bg-purple-50 hover:bg-purple-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              iconBg="bg-white"
            />
            <ServiceCard
              icon={PiggyBank}
              title="Saving Accounts"
              description="To save and invest, talk to Natwest."
              colorClass="bg-green-50 hover:bg-green-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              iconBg="bg-white"
            />
            <ServiceCard
              icon={Megaphone}
              title="Promotions"
              description="The bank for marketing development."
              colorClass="bg-orange-50 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              iconBg="bg-white"
            />
            <ServiceCard
              icon={Headphones}
              title="24/7 Support"
              description="The bank provide 24/7 support"
              colorClass="bg-pink-50 hover:bg-pink-100 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              iconBg="bg-white"
            />
          </div>

          {/* Right Column (Large Card) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="bg-blue-100 dark:bg-blue-900 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Built on a robust and powerful platform
              </h3>
            </div>

            {/* Embedded Chart Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-gray-500">Overview</span>
                <span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">Weekly</span>
              </div>
              <div className="h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ r: 4, fill: '#6366f1' }}
                      animationDuration={2000}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

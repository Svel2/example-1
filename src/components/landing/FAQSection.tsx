import React from 'react';
import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const faqs = [
  { question: "What is PayView?", answer: "PayView is a comprehensive financial platform designed to streamline your payment experience, offering tools for buying, trading, and investing in digital assets." },
  { question: "Why doesn't PayView automatically activate my subscriptions?", answer: "To ensure security and user control, we require manual confirmation for new subscriptions. You can change this in your settings." },
  { question: "Which file formats are supported?", answer: "We support all major financial data formats including CSV, PDF, and direct bank integrations via API." },
  { question: "How many subscriptions can I subscribe to?", answer: "There is no limit to the number of subscriptions you can manage through PayView. Our platform scales with your needs." },
  { question: "Can you pay with PayView?", answer: "Yes, PayView functions as a complete payment solution allowing peer-to-peer transfers, bill payments, and merchant transactions." },
  { question: "How can I share my location?", answer: "Location sharing is available for specific merchant features and can be enabled in the privacy settings of the mobile app." },
  { question: "How can I cancel or upgrade my PayView subscription?", answer: "You can manage your plan directly from the dashboard under 'Account Settings' -> 'Billing'." },
  { question: "Why PayView?", answer: "PayView offers unmatched security, lower fees, and a more intuitive user experience compared to traditional banking apps." },
];

export function FAQSection() {
  const midPoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midPoint);
  const rightFaqs = faqs.slice(midPoint);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-indigo-600 font-semibold mb-2">FAQ</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Answers to most common questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {leftFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-l-${i}`} className="bg-white dark:bg-gray-800 rounded-xl border-none px-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left text-gray-900 dark:text-white">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {rightFaqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-r-${i}`} className="bg-white dark:bg-gray-800 rounded-xl border-none px-4 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="hover:no-underline font-semibold text-left text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

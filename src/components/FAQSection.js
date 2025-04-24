'use client';
import { motion } from 'framer-motion';

export default function FAQSection({ 
  title = 'Preguntas frecuentes',
  faqs,
  className = 'bg-black/20 backdrop-blur'
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="container-py"
    >
      <h2 className="section-title">{title}</h2>
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.98 }}
            whileInView={{ scale: 1 }}
            className={`${className} rounded-lg p-4 md:p-6`}
          >
            <h3 className="text-lg md:text-xl font-bold mb-2">{faq.question}</h3>
            <p className="opacity-90">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
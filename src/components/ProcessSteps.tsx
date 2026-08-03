import React from 'react';
import { Database, Cpu, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Database,
    title: 'Data Integration',
    description: 'Seamlessly connect and unify data from multiple sources with our intelligent integration layer.',
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Advanced neural networks analyze patterns and extract actionable insights in real-time.',
  },
  {
    icon: Zap,
    title: 'Automated Execution',
    description: 'AI-driven automation delivers results instantly, optimizing your workflows.',
  },
];

export function ProcessSteps() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--neutral-light)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[var(--accent-blue-start)]/5 to-[var(--accent-blue-end)]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
            How Our AI <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, three-step process that transforms complex data into actionable intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Animated gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[2rem] opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
              
              <div className="relative bg-white rounded-[2rem] p-8 lg:p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Floating Step Number */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white text-2xl shadow-xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {index + 1}
                </motion.div>

                {/* Icon Container */}
                <div className="mb-8 mt-6">
                  <motion.div 
                    className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--accent-blue-start)]/20 to-[var(--accent-blue-end)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] opacity-0 group-hover:opacity-10 transition-opacity" />
                    <step.icon className="w-10 h-10 text-[var(--accent-blue-end)] relative z-10" />
                  </motion.div>
                </div>

                <h3 className="text-2xl lg:text-3xl mb-4 text-[var(--navy)] group-hover:gradient-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>

                {/* Animated Connector Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-1/2 -right-8 xl:-right-12 w-16 xl:w-24 h-1"
                  >
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-full" />
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--accent-blue-end)] rounded-full" />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Brain, Shield, BarChart3, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

const products = [
  {
    icon: Brain,
    title: 'Neural Insights',
    description: 'Advanced predictive analytics powered by deep learning to forecast trends and identify opportunities.',
    features: ['Predictive Modeling', 'Pattern Recognition', 'Real-time Analytics'],
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Enterprise-grade security with intelligent threat detection and automated response systems.',
    features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring'],
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Transform raw data into actionable insights with our intelligent business intelligence platform.',
    features: ['Custom Dashboards', 'Data Visualization', 'Automated Reporting'],
    gradient: 'from-orange-500 to-yellow-500',
    featured: false,
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Natural language processing that understands context and delivers human-like interactions.',
    features: ['NLP Engine', 'Multi-language Support', '24/7 Availability'],
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
  },
];

export function ProductCards() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] via-[#252540] to-[var(--navy)]">
        <div className="absolute inset-0">
          {/* Animated mesh gradient */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--accent-blue-start)] rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--highlight-yellow)] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '3s' }} />
          </div>
          
          {/* Floating particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * 1000,
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm text-white border border-white/20 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Our Solutions
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Powerful AI <span className="bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--highlight-yellow)] bg-clip-text text-transparent">Tools & Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive AI-powered tools designed to solve your most complex business challenges
          </p>
        </motion.div>

        {/* Modern Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated gradient border container */}
              <div className="absolute -inset-[1px] rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-r ${product.gradient} rounded-[2.5rem] blur-sm`} />
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} rounded-[3rem] opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
              
              <motion.div
                whileHover={{ 
                  y: -8,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative rounded-[2.5rem] p-10 h-full flex flex-col backdrop-blur-2xl border border-white/20 group-hover:border-white/40 transition-all duration-500 bg-gradient-to-br from-[#1a1a2d]/95 to-[#252540]/90 group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Floating gradient orb */}
                  <motion.div 
                    className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Animated Icon Container */}
                  <motion.div 
                    className="mb-8 relative z-10"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative w-20 h-20">
                      {/* Rotating gradient ring */}
                      <motion.div 
                        className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-r ${product.gradient} p-[2px]`}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-full h-full rounded-[1.2rem] bg-[var(--navy)] flex items-center justify-center">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}>
                            <product.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-3xl mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 mb-8 flex-grow leading-relaxed text-lg">
                      {product.description}
                    </p>

                    {/* Features with enhanced styling */}
                    <ul className="space-y-4 mb-10">
                      {product.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 text-base text-gray-200 group/item"
                        >
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
                            <div className="w-2 h-2 rounded-full bg-white" />
                          </div>
                          <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Enhanced CTA */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      <button className={`relative w-full h-auto px-6 py-4 rounded-2xl bg-gradient-to-r ${product.gradient} text-white hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn overflow-hidden`}>
                        <div className="absolute inset-0 bg-white/0 group-hover/btn:bg-white/10 transition-colors duration-300" />
                        <span className="relative z-10">Explore Solution</span>
                        <motion.span
                          className="relative z-10"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Trusted by 500+ companies worldwide to deliver AI-powered excellence
          </p>
        </motion.div>
      </div>
    </section>
  );
}

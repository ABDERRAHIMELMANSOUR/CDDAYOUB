import React from 'react';
import { 
  Building2, 
  ShoppingCart, 
  HeartPulse, 
  Briefcase, 
  GraduationCap, 
  Factory,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise AI',
    description: 'Comprehensive AI infrastructure for large organizations',
    features: [
      'Custom AI model development',
      'Enterprise integration',
      'Scalable cloud deployment',
      'Advanced security protocols',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-commerce',
    description: 'Intelligent solutions for modern commerce',
    features: [
      'Personalized recommendations',
      'Inventory optimization',
      'Dynamic pricing algorithms',
      'Customer behavior analytics',
    ],
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'AI-powered tools for better patient outcomes',
    features: [
      'Diagnostic assistance',
      'Patient data analysis',
      'Treatment optimization',
      'HIPAA-compliant systems',
    ],
  },
  {
    icon: Briefcase,
    title: 'Financial Services',
    description: 'Advanced analytics for financial institutions',
    features: [
      'Fraud detection',
      'Risk assessment',
      'Algorithmic trading',
      'Regulatory compliance',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Personalized learning powered by AI',
    features: [
      'Adaptive learning paths',
      'Student performance tracking',
      'Content recommendations',
      'Automated grading',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Smart automation for production excellence',
    features: [
      'Predictive maintenance',
      'Quality control automation',
      'Supply chain optimization',
      'Production forecasting',
    ],
  },
];

const benefits = [
  'Reduce operational costs by up to 40%',
  'Improve decision-making accuracy',
  'Scale effortlessly with your business',
  'Enterprise-grade security and compliance',
  '24/7 AI-powered support',
  'Seamless integration with existing systems',
];

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-mesh">
          <div className="absolute inset-0 bg-white/80" />
        </div>

        {/* Animated Blobs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/20 to-[var(--accent-blue-end)]/20 blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                Solutions for Every Industry
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[var(--navy)] mb-6 tracking-tight">
              Industry-Leading <br /><span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Tailored AI solutions designed to solve your industry's unique challenges and drive measurable results
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="relative overflow-hidden gradient-primary text-white px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(0,198,255,0.4)] transition-all duration-300 group"
                onClick={() => onNavigate('contact')}
              >
                <span className="relative z-10 flex items-center">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[3rem] opacity-20 blur-2xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZGlzY3Vzc2lvbiUyMG1lZXRpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjI1MTExMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team discussing collaborative AI solutions"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                Industry Solutions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
              Solutions by <span className="gradient-text">Industry</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized AI tools built for your sector's specific needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div 
                  className="relative h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                  
                  <div className="relative bg-white rounded-[2rem] p-8 border border-gray-200 hover:border-[var(--accent-blue-end)] transition-all duration-500 h-full shadow-lg hover:shadow-2xl">
                    {/* Icon */}
                    <div className="mb-8">
                      <motion.div 
                        className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <solution.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-[var(--navy)] mb-3 group-hover:gradient-text transition-all duration-300">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-[var(--accent-blue-end)] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <button className="flex items-center gap-2 text-[var(--accent-blue-end)] hover:gap-3 transition-all group/btn">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Animated bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-[2rem]" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--neutral-light)] overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-[var(--accent-blue-start)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                  Why NeuralAI
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
                Why Choose <span className="gradient-text">NeuralAI?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Our solutions deliver tangible results from day one, backed by our team of AI experts and proven methodologies.
              </p>

              <ul className="space-y-5">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[3rem] opacity-20 blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYyMjMwOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Neural network visualization representing AI technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/20 to-transparent" />
              </div>

              {/* Floating Orb */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[var(--highlight-yellow)] opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[var(--navy)] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-blue-start)] rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--highlight-yellow)] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm">
                Get Started Today
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can address your specific challenges and help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[var(--highlight-yellow)] to-yellow-400 text-[var(--navy)] px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,214,10,0.4)] transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  <span className="relative z-10 flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[var(--highlight-yellow)]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="px-10 py-7 rounded-3xl text-lg border-2 border-white bg-transparent text-white hover:bg-white hover:text-[var(--navy)] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Download Case Studies
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechCorp',
    content: 'NeuralAI transformed our data analytics capabilities. The insights we gain have directly contributed to a 40% increase in operational efficiency.',
    rating: 5,
    company: 'TechCorp',
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP of Operations, GlobalRetail',
    content: 'The implementation was seamless, and the AI-driven automation has saved us countless hours. Our team can now focus on strategic initiatives.',
    rating: 5,
    company: 'GlobalRetail',
  },
  {
    name: 'Emma Thompson',
    role: 'Head of Innovation, FinanceHub',
    content: 'What impressed us most was the human-centered approach. The AI feels like an extension of our team, not a replacement.',
    rating: 5,
    company: 'FinanceHub',
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--neutral-light)] to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent-blue-start)]/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--accent-blue-end)]/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6 tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of companies that trust NeuralAI to power their AI transformation
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Gradient glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[3rem] opacity-20 blur-2xl" />
              
              <div className="relative glass-card rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl shadow-2xl">
                {/* Quote Mark */}
                <div className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-xl">
                  <span className="text-5xl text-white leading-none">"</span>
                </div>

                {/* Rating */}
                <div className="flex gap-2 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-[var(--highlight-yellow)] text-[var(--highlight-yellow)]" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Content */}
                <blockquote className="text-2xl md:text-3xl lg:text-4xl mb-12 leading-relaxed text-[var(--navy)]">
                  {testimonials[currentIndex].content}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-6">
                  <motion.div 
                    className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl text-white">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </motion.div>
                  <div>
                    <div className="text-xl text-[var(--navy)] mb-1">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    <div className="text-sm text-[var(--accent-blue-end)]">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white shadow-lg hover:shadow-xl transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </motion.div>

            {/* Animated Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] w-12'
                      : 'bg-gray-300 hover:bg-gray-400 w-3'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="w-14 h-14 rounded-2xl border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white shadow-lg hover:shadow-xl transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

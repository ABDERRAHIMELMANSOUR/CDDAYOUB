import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

const blogPosts = [
  {
    title: 'The Future of AI in Enterprise',
    excerpt: 'Exploring how artificial intelligence is reshaping the way businesses operate and compete in the digital age.',
    date: 'November 1, 2025',
    category: 'Industry Insights',
    image: 'https://images.unsplash.com/photo-1647082550285-119acfd169f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NjIyNDY4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Building Ethical AI Systems',
    excerpt: 'Our approach to ensuring AI solutions are transparent, fair, and aligned with human values.',
    date: 'October 28, 2025',
    category: 'Ethics',
    image: 'https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYyMjMwOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'AI-Driven Customer Experience',
    excerpt: 'How intelligent automation is creating more personalized and responsive customer interactions.',
    date: 'October 25, 2025',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1655746340587-9d1aaad92b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2MjE4Mjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BlogPreview() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--accent-blue-start)]/10 to-[var(--accent-blue-end)]/10 text-sm text-[var(--accent-blue-end)]">
                Insights & Resources
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-4 tracking-tight">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our thoughts on AI, technology, and innovation
            </p>
          </div>
          <Button
            variant="ghost"
            className="hidden md:flex items-center gap-2 text-[var(--accent-blue-end)] hover:bg-[var(--accent-blue-end)]/10 rounded-2xl px-6 py-3 border border-[var(--accent-blue-end)]/20 hover:border-[var(--accent-blue-end)] transition-all"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <motion.div 
                className="relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <div className="relative bg-white rounded-[2rem] overflow-hidden border border-gray-200 hover:border-[var(--accent-blue-end)] transition-all duration-500 shadow-lg hover:shadow-2xl h-full flex flex-col">
                  {/* Image with overlay gradient */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={`Blog post image for ${post.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 rounded-full glass-card backdrop-blur-xl text-xs text-white border border-white/20">
                        {post.category}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 glass-card px-3 py-1.5 rounded-full backdrop-blur-xl border border-white/20">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      <time dateTime={post.date} className="text-xs text-white">{post.date}</time>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl mb-3 text-[var(--navy)] group-hover:gradient-text transition-all duration-300 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[var(--accent-blue-end)] group/cta">
                      <span className="text-sm">Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Animated bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button
            variant="outline"
            className="w-full border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white rounded-2xl"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

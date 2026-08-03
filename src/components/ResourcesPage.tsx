import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  TrendingUp, 
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Users,
  Zap,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface ResourcesPageProps {
  onNavigate: (page: string) => void;
}

const featuredResources = [
  {
    id: 1,
    type: 'Whitepaper',
    title: 'The State of AI in Enterprise 2025',
    description: 'A comprehensive analysis of how Fortune 500 companies are leveraging AI to drive innovation and competitive advantage.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: 'Research',
    readTime: '25 min read',
    date: 'March 2025',
    downloads: '15.2K',
    featured: true,
  },
  {
    id: 2,
    type: 'Case Study',
    title: 'How TechCorp Increased Efficiency by 340%',
    description: 'Discover how our AI solutions helped a leading tech company automate operations and triple their productivity.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'Success Story',
    readTime: '12 min read',
    date: 'February 2025',
    downloads: '8.7K',
    featured: true,
  },
  {
    id: 3,
    type: 'Webinar',
    title: 'AI Implementation Best Practices',
    description: 'Join our experts as they share proven strategies for successful AI adoption in your organization.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
    category: 'Video',
    readTime: '45 min',
    date: 'April 2025',
    downloads: '22.1K',
    featured: true,
  },
];

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Transformer Models: A Deep Dive',
    excerpt: 'Explore the architecture behind modern language models and how they process information.',
    category: 'Technical',
    author: 'Dr. Sarah Chen',
    date: 'Nov 1, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'AI Ethics and Responsible Development',
    excerpt: 'Best practices for building AI systems that are fair, transparent, and accountable.',
    category: 'Ethics',
    author: 'Michael Rodriguez',
    date: 'Oct 28, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Scaling AI Infrastructure: Lessons Learned',
    excerpt: 'Key insights from deploying enterprise AI solutions at scale across multiple industries.',
    category: 'Infrastructure',
    author: 'Emily Watson',
    date: 'Oct 25, 2025',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'The Future of Natural Language Processing',
    excerpt: 'Emerging trends in NLP and what they mean for business applications.',
    category: 'Trends',
    author: 'Dr. James Kim',
    date: 'Oct 20, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'AI-Powered Customer Experience Transformation',
    excerpt: 'How AI is revolutionizing customer interactions and driving satisfaction.',
    category: 'Business',
    author: 'Lisa Chen',
    date: 'Oct 15, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Computer Vision in Manufacturing',
    excerpt: 'Real-world applications of computer vision for quality control and automation.',
    category: 'Industry',
    author: 'Alex Turner',
    date: 'Oct 10, 2025',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&h=400&fit=crop',
  },
];

const guides = [
  {
    id: 1,
    title: 'Getting Started with AI Integration',
    description: 'A step-by-step guide to integrating AI into your existing workflows.',
    icon: Zap,
    format: 'PDF Guide',
    pages: '24 pages',
  },
  {
    id: 2,
    title: 'AI Strategy Playbook for Leaders',
    description: 'Strategic framework for executives planning AI initiatives.',
    icon: Target,
    format: 'Interactive PDF',
    pages: '36 pages',
  },
  {
    id: 3,
    title: 'Data Preparation Best Practices',
    description: 'Essential techniques for preparing your data for AI models.',
    icon: TrendingUp,
    format: 'Digital Workbook',
    pages: '18 pages',
  },
  {
    id: 4,
    title: 'Team Training & Change Management',
    description: 'Guide to successfully onboarding your team to AI tools.',
    icon: Users,
    format: 'PDF Guide',
    pages: '28 pages',
  },
];

const caseStudies = [
  {
    id: 1,
    company: 'Global Retail Corp',
    industry: 'Retail',
    title: 'Revolutionizing Inventory Management with Predictive AI',
    results: ['45% reduction in stockouts', '32% inventory cost savings', '$12M annual savings'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    company: 'HealthTech Solutions',
    industry: 'Healthcare',
    title: 'AI-Powered Diagnostic Assistance for Medical Professionals',
    results: ['98.5% diagnostic accuracy', '60% faster diagnosis', '200K+ patients helped'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    company: 'FinanceFirst Bank',
    industry: 'Finance',
    title: 'Fraud Detection System with Real-Time AI Analysis',
    results: ['99.2% fraud detection rate', '50% fewer false positives', '$8M fraud prevented'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
];

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[#252540] to-[var(--navy)]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue-start)] rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(var(--accent-blue-start) 1px, transparent 1px), linear-gradient(90deg, var(--accent-blue-start) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md text-sm text-white border border-white/20 inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Knowledge Hub
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
              Resources to{' '}
              <span className="bg-gradient-to-r from-[var(--accent-blue-start)] via-purple-400 to-[var(--highlight-yellow)] bg-clip-text text-transparent">
                Accelerate Your AI Journey
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Insights, guides, and case studies to help you harness the full potential of AI technology.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search resources, guides, case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-7 rounded-2xl bg-white/10 backdrop-blur-md border-white/20 text-white placeholder:text-gray-400 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--accent-blue-end)]/10 text-[var(--accent-blue-end)] border-0">
              Featured Content
            </Badge>
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-4">
              Must-Read Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and impactful content to help you succeed with AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[var(--highlight-yellow)] text-[var(--navy)] border-0">
                        {resource.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {resource.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {resource.downloads}
                      </span>
                    </div>
                    <h3 className="text-xl text-[var(--navy)] group-hover:text-[var(--accent-blue-end)] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn hover:bg-[var(--accent-blue-end)]/10 text-[var(--accent-blue-end)]"
                    >
                      Download Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-4">
                  Latest Articles
                </h2>
                <p className="text-xl text-gray-600">
                  Stay updated with insights from our AI experts
                </p>
              </div>
              <Button
                variant="outline"
                className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all duration-300"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter by Category
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-[var(--navy)]">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl text-[var(--navy)] group-hover:text-[var(--accent-blue-end)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[var(--accent-blue-end)] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              className="group relative overflow-hidden gradient-primary text-white px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(0,198,255,0.4)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                View All Articles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-end)] to-[var(--accent-blue-start)]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Guides & Downloads */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--highlight-yellow)]/20 text-[var(--navy)] border-0">
              Practical Guides
            </Badge>
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-4">
              Download Free Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources to help you implement AI successfully
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="group p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">
                  <div className="flex items-start gap-6 h-full">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl text-[var(--navy)] group-hover:text-[var(--accent-blue-end)] transition-colors">
                          {guide.title}
                        </h3>
                        <Badge variant="outline" className="flex-shrink-0">
                          {guide.format}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed flex-1">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-500">{guide.pages}</span>
                        <Button
                          variant="ghost"
                          className="group/btn text-[var(--accent-blue-end)] hover:bg-[var(--accent-blue-end)]/10"
                        >
                          <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-0.5 transition-transform" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[var(--accent-blue-end)]/10 text-[var(--accent-blue-end)] border-0">
              Success Stories
            </Badge>
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how leading companies are achieving remarkable outcomes with our AI solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-2 bg-white/90 backdrop-blur-sm text-[var(--navy)]">
                        {study.industry}
                      </Badge>
                      <h3 className="text-white">
                        {study.company}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h4 className="text-lg text-[var(--navy)] leading-snug">
                      {study.title}
                    </h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue-end)] mt-2 flex-shrink-0" />
                          <p className="text-gray-600 text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group/btn hover:bg-[var(--accent-blue-end)]/10 text-[var(--accent-blue-end)] mt-4"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] to-[#1a1a2d]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get personalized guidance from our AI experts and discover the perfect solution for your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  onClick={() => onNavigate('solutions')}
                >
                  Explore Solutions
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

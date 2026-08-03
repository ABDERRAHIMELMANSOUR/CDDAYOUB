import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Database, 
  Shield, 
  Zap, 
  Network, 
  Lock, 
  CloudCog,
  Code,
  Layers,
  GitBranch,
  Activity,
  Server,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface TechnologyPageProps {
  onNavigate: (page: string) => void;
}

const techStack = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'Advanced deep learning models with transformer architectures',
    details: ['GPT-based Models', 'BERT & RoBERTa', 'Custom Training Pipelines'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Data Infrastructure',
    description: 'Scalable data processing with distributed computing',
    details: ['Real-time Processing', 'Petabyte-scale Storage', 'Auto-scaling'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Security Layer',
    description: 'Enterprise-grade security with end-to-end encryption',
    details: ['Zero Trust Architecture', 'GDPR Compliant', 'SOC 2 Certified'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: CloudCog,
    title: 'Cloud Native',
    description: 'Multi-cloud deployment with automatic failover',
    details: ['Kubernetes Orchestration', '99.99% Uptime', 'Global CDN'],
    gradient: 'from-orange-500 to-yellow-500',
  },
];

const capabilities = [
  {
    icon: Code,
    title: 'Natural Language Processing',
    metric: '150+ Languages',
    description: 'State-of-the-art NLP models with contextual understanding',
  },
  {
    icon: Activity,
    title: 'Real-time Analytics',
    metric: '<10ms Latency',
    description: 'Process millions of requests per second with ultra-low latency',
  },
  {
    icon: Layers,
    title: 'Model Accuracy',
    metric: '99.7% Precision',
    description: 'Industry-leading accuracy across multiple AI tasks',
  },
  {
    icon: Server,
    title: 'Training Capacity',
    metric: '10B+ Parameters',
    description: 'Large-scale model training with distributed computing',
  },
];

const innovations = [
  {
    title: 'Adaptive Learning',
    description: 'Our models continuously improve through feedback loops and automated retraining',
    icon: GitBranch,
  },
  {
    title: 'Explainable AI',
    description: 'Transparent decision-making with full visibility into model reasoning',
    icon: Network,
  },
  {
    title: 'Edge Computing',
    description: 'Deploy AI models at the edge for ultra-low latency applications',
    icon: Zap,
  },
  {
    title: 'Quantum-Ready',
    description: 'Architected to leverage quantum computing as it becomes available',
    icon: Sparkles,
  },
];

export function TechnologyPage({ onNavigate }: TechnologyPageProps) {
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
                <Cpu className="w-4 h-4" />
                Advanced Technology
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-8 tracking-tight">
              Powering the Future with{' '}
              <span className="bg-gradient-to-r from-[var(--accent-blue-start)] via-purple-400 to-[var(--highlight-yellow)] bg-clip-text text-transparent">
                Next-Gen AI
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our cutting-edge technology stack combines state-of-the-art AI models, 
              scalable infrastructure, and robust security to deliver unparalleled performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="group relative overflow-hidden gradient-primary text-white px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(0,198,255,0.4)] transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  <span className="relative z-10 flex items-center">
                    Request Technical Demo
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue-end)] to-[var(--accent-blue-start)]"
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
                  View Solutions
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-6">
              Our Technology <span className="bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of cutting-edge technologies and industry best practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-[var(--accent-blue-end)] group relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <tech.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    <h3 className="text-2xl text-[var(--navy)] mb-4">{tech.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>

                    <ul className="space-y-3">
                      {tech.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3 text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.gradient}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-6">
              Performance <span className="bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">Metrics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading performance across all key metrics
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] rounded-3xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500" />
                <Card className="relative p-8 text-center bg-white group-hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <capability.icon className="w-12 h-12 mx-auto mb-4 text-[var(--accent-blue-end)] group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                  <div className="text-4xl mb-2 bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">{capability.metric}</div>
                  <h3 className="text-xl text-[var(--navy)] mb-3">{capability.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{capability.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] to-[#252540]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-blue-start)] rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-white mb-6">
              Continuous <span className="bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--highlight-yellow)] bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pushing the boundaries of what's possible with artificial intelligence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 hover:bg-white/15 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <innovation.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white mb-3">{innovation.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{innovation.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Visualization */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl text-[var(--navy)] mb-6">
              System <span className="bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] bg-clip-text text-transparent">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A robust, scalable architecture designed for enterprise-grade performance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border-2 border-gray-200 shadow-2xl">
              {/* Architecture diagram representation */}
              <div className="space-y-8">
                {/* Layer 1 */}
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--accent-blue-start)] to-[var(--accent-blue-end)] text-white mb-4 shadow-lg">
                    Application Layer
                  </div>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {['Web App', 'Mobile App', 'API Gateway'].map((item) => (
                      <div key={item} className="px-4 py-2 rounded-xl bg-blue-50 text-[var(--accent-blue-end)] border border-blue-200 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-[var(--accent-blue-end)] to-transparent" />
                </div>

                {/* Layer 2 */}
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-4 shadow-lg">
                    AI Processing Layer
                  </div>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {['Neural Networks', 'ML Models', 'NLP Engine'].map((item) => (
                      <div key={item} className="px-4 py-2 rounded-xl bg-purple-50 text-purple-600 border border-purple-200 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
                </div>

                {/* Layer 3 */}
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-4 shadow-lg">
                    Data & Security Layer
                  </div>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {['Data Lake', 'Encryption', 'Access Control'].map((item) => (
                      <div key={item} className="px-4 py-2 rounded-xl bg-green-50 text-green-600 border border-green-200 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-12 bg-gradient-to-b from-green-500 to-transparent" />
                </div>

                {/* Layer 4 */}
                <div className="text-center">
                  <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white mb-4 shadow-lg">
                    Infrastructure Layer
                  </div>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {['Cloud Servers', 'CDN', 'Load Balancers'].map((item) => (
                      <div key={item} className="px-4 py-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 text-sm">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Experience Our Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get hands-on with our platform and see how our cutting-edge AI technology can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-[var(--highlight-yellow)] to-yellow-400 text-[var(--navy)] px-10 py-7 rounded-3xl text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,214,10,0.4)] transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  <span className="relative z-10 flex items-center">
                    Schedule Technical Demo
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
                  onClick={() => onNavigate('about')}
                >
                  Learn More About Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--neutral-light)] to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[var(--navy)] mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our AI solutions? We're here to help you find the perfect fit for your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl h-full flex flex-col">
                <h2 className="text-2xl text-[var(--navy)] mb-6">Send us a message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl text-[var(--navy)] mb-2">Thank you!</h3>
                    <p className="text-gray-600">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="rounded-2xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="rounded-2xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                        required
                      >
                        <SelectTrigger id="industry" className="rounded-2xl">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                          <SelectItem value="retail">Retail & E-commerce</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Financial Services</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="rounded-2xl resize-none"
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full gradient-primary text-white px-8 py-6 rounded-2xl hover:opacity-90 text-lg"
                    >
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6 h-full"
            >
              {/* Contact Cards */}
              <div className="space-y-4 flex-1">
                <div className="bg-white rounded-3xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[var(--navy)] mb-1">Email Us</h3>
                      <a
                        href="mailto:hello@neuralai.com"
                        className="text-[var(--accent-blue-end)] hover:underline"
                      >
                        hello@neuralai.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[var(--navy)] mb-1">Call Us</h3>
                      <a
                        href="tel:+1-555-123-4567"
                        className="text-[var(--accent-blue-end)] hover:underline"
                      >
                        +1 (555) 123-4567
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Mon-Fri, 9am-6pm EST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-[var(--navy)] mb-1">Visit Us</h3>
                      <address className="text-gray-600 not-italic">
                        123 Innovation Drive<br />
                        San Francisco, CA 94102<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-[var(--navy)] rounded-3xl p-8 text-white">
                <h3 className="text-2xl mb-4">Ready to get started?</h3>
                <p className="text-gray-300 mb-6">
                  Book a free 30-minute consultation with our AI experts to discuss your specific needs and explore how we can help transform your business with AI.
                </p>
                <Button className="w-full bg-[var(--highlight-yellow)] text-[var(--navy)] px-8 py-6 rounded-2xl hover:bg-[var(--highlight-yellow)]/90">
                  Book a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

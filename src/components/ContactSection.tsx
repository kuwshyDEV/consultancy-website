'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import LoadingSpinner from './LoadingSpinner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }

    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-accent/80 leading-relaxed">
            Ready to transform your business? Contact us for a consultation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-accent/80 mb-2">
                    Name
                  </label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-primary border ${
                        errors.name ? 'border-red-500' : 'border-secondary/20'
                      } p-3 focus:border-secondary focus:outline-none transition-colors disabled:opacity-50`}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <label htmlFor="email" className="block text-accent/80 mb-2">
                    Email
                  </label>
                  <motion.div whileTap={{ scale: 0.99 }}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-primary border ${
                        errors.email ? 'border-red-500' : 'border-secondary/20'
                      } p-3 focus:border-secondary focus:outline-none transition-colors disabled:opacity-50`}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-500 text-sm mt-1"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-accent/80 mb-2">
                  Company (Optional)
                </label>
                <motion.div whileTap={{ scale: 0.99 }}>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-primary border border-secondary/20 p-3 focus:border-secondary focus:outline-none transition-colors disabled:opacity-50"
                  />
                </motion.div>
              </div>
              <div>
                <label htmlFor="message" className="block text-accent/80 mb-2">
                  Message
                </label>
                <motion.div whileTap={{ scale: 0.99 }}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    rows={6}
                    className={`w-full bg-primary border ${
                      errors.message ? 'border-red-500' : 'border-secondary/20'
                    } p-3 focus:border-secondary focus:outline-none transition-colors disabled:opacity-50`}
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full md:w-auto disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <LoadingSpinner />
                ) : (
                  'Send Message'
                )}
              </motion.button>
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center justify-center gap-2 text-green-500 mt-4"
                  >
                    <FaCheckCircle />
                    <p>Thank you for your message. We'll be in touch soon!</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div whileHover={{ x: 5 }} className="transition-all">
              <div className="flex items-center gap-4 text-secondary mb-4">
                <FaMapMarkerAlt className="text-2xl" />
                <h3 className="text-xl font-serif">Location</h3>
              </div>
              <p className="text-accent/80 leading-relaxed">
                123 Business Avenue<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} className="transition-all">
              <div className="flex items-center gap-4 text-secondary mb-4">
                <FaEnvelope className="text-2xl" />
                <h3 className="text-xl font-serif">Email</h3>
              </div>
              <a
                href="mailto:contact@eliteconsult.com"
                className="text-accent/80 hover:text-secondary transition-colors"
              >
                contact@eliteconsult.com
              </a>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} className="transition-all">
              <div className="flex items-center gap-4 text-secondary mb-4">
                <FaPhone className="text-2xl" />
                <h3 className="text-xl font-serif">Phone</h3>
              </div>
              <a
                href="tel:+1234567890"
                className="text-accent/80 hover:text-secondary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

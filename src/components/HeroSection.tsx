'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import ImagePlaceholder from './ImagePlaceholder';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-20">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6"
          >
            <span className="text-gradient">Strategic Excellence</span>
            <br />
            <span className="text-accent">Defined</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-accent/80 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Transforming visions into reality through strategic consulting and innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="#contact"
              className="btn-primary w-full sm:w-auto text-center px-8 py-4"
            >
              Get Started
            </Link>
            <Link
              href="#portfolio"
              className="btn-secondary w-full sm:w-auto text-center px-8 py-4"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Stats/Features Grid */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {[
              { title: 'Success Rate', value: '98%' },
              { title: 'Projects', value: '500+' },
              { title: 'Global Clients', value: '200+' },
              { title: 'Team Experts', value: '50+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-secondary/5 backdrop-blur-sm rounded-lg p-6 sm:p-8 text-center luxury-card"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-2 text-secondary">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base text-accent/80">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/20 opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, var(--secondary) 0.1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
    </section>
  );
}

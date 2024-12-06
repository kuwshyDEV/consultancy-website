'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChartLine, FaLightbulb, FaHandshake, FaGem } from 'react-icons/fa';

const values = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Strategic Excellence',
    description: 'Delivering transformative solutions through deep industry expertise and innovative methodologies.'
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Innovation Focus',
    description: 'Pioneering cutting-edge approaches to solve complex business challenges.'
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: 'Client Partnership',
    description: 'Building lasting relationships through trust, transparency, and exceptional results.'
  },
  {
    icon: <FaGem className="w-8 h-8" />,
    title: 'Premium Quality',
    description: 'Maintaining the highest standards of excellence in every engagement.'
  }
];

const achievements = [
  { number: '20+', text: 'Years of Excellence' },
  { number: '500+', text: 'Projects Delivered' },
  { number: '95%', text: 'Client Satisfaction' },
  { number: '50+', text: 'Global Markets' }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-block h-1 bg-[#D4AF37] mb-4"
                style={{ width: 60 }}
              />
              <h2 className="text-4xl md:text-5xl font-serif">
                Elevating Business
                <span className="text-[#D4AF37] block mt-2">Through Excellence</span>
              </h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As a premier strategic consulting firm, we combine deep industry expertise
              with innovative methodologies to deliver transformative results. Our approach
              is rooted in understanding your unique challenges and opportunities.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-6 text-center">
                    <div className="text-[#D4AF37] text-4xl font-bold mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#D4AF37]/90 transition-colors"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="/images/placeholder.jpg"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-playfair mb-10 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]/20 transform origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="text-[#D4AF37] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Separator */}
        <div className="w-full max-w-6xl mx-auto mt-24 mb-24">
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30"></div>
        </div>
      </div>
    </section>
  );
}

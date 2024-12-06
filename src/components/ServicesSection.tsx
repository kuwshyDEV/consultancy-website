'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChartLine, FaCogs, FaGlobe, FaRocket, FaUserTie, FaChartBar, FaTimes } from 'react-icons/fa';

const services = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Strategic Planning',
    description: 'Comprehensive business strategy development and execution planning',
    details: [
      'Market analysis and positioning',
      'Competitive advantage development',
      'Growth strategy formulation',
      'Risk assessment and mitigation'
    ],
    image: '/images/placeholder.jpg'
  },
  {
    icon: <FaCogs className="w-8 h-8" />,
    title: 'Operational Excellence',
    description: 'Streamline operations and optimize business processes',
    details: [
      'Process optimization',
      'Quality management',
      'Cost reduction strategies',
      'Performance metrics development'
    ],
    image: '/images/placeholder.jpg'
  },
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Market Expansion',
    description: 'Global market entry and expansion strategies',
    details: [
      'Market opportunity assessment',
      'Entry strategy development',
      'Partnership development',
      'Local market adaptation'
    ],
    image: '/images/placeholder.jpg'
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: 'Digital Transformation',
    description: 'Technology-driven business transformation',
    details: [
      'Digital strategy development',
      'Technology implementation',
      'Change management',
      'Digital capability building'
    ],
    image: '/images/placeholder.jpg'
  },
  {
    icon: <FaUserTie className="w-8 h-8" />,
    title: 'Leadership Advisory',
    description: 'Executive coaching and leadership development',
    details: [
      'Executive mentoring',
      'Team development',
      'Succession planning',
      'Leadership assessment'
    ],
    image: '/images/placeholder.jpg'
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: 'Performance Analytics',
    description: 'Data-driven insights and performance optimization',
    details: [
      'Performance analysis',
      'KPI development',
      'Reporting systems',
      'Decision support'
    ],
    image: '/images/placeholder.jpg'
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We offer comprehensive consulting services tailored to meet your business needs,
            combining industry expertise with innovative solutions for exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedService(index)}
              className="group cursor-pointer"
            >
              <div className="bg-gray-900/50 rounded-lg p-8 hover:bg-gray-900/80 transition-all duration-300 h-full">
                <div className="text-[#D4AF37] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-[#D4AF37] hover:text-white transition-colors inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService !== null && (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-6"
              >
                <div className="absolute inset-0 bg-black/80" onClick={() => setSelectedService(null)} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/20"
                >
                  <div className="relative">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <FaTimes className="w-5 h-5" />
                    </button>
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={services[selectedService].image}
                          alt={services[selectedService].title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair mb-4">{services[selectedService].title}</h3>
                        <p className="text-gray-300 mb-6">{services[selectedService].description}</p>
                        <ul className="space-y-3">
                          {services[selectedService].details.map((detail, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2" />
                              <span className="text-gray-400">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

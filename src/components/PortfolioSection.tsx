'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Strategic Growth Initiative',
    description: 'Transformative business strategy for Fortune 500 company',
    image: '/images/placeholder.jpg',
    details: 'Led a comprehensive strategic transformation for a Fortune 500 company, resulting in 30% revenue growth and market expansion across three continents.',
  },
  {
    title: 'Market Expansion',
    description: 'International market entry strategy and execution',
    image: '/images/placeholder.jpg',
    details: 'Developed and executed market entry strategies for emerging markets, establishing successful operations in 5 new countries within 18 months.',
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital overhaul and modernization',
    image: '/images/placeholder.jpg',
    details: 'Orchestrated end-to-end digital transformation, implementing cutting-edge technologies that reduced operational costs by 40% and improved customer satisfaction scores by 60%.',
  },
  {
    title: 'Operational Excellence',
    description: 'Process optimization and efficiency improvement',
    image: '/images/placeholder.jpg',
    details: 'Streamlined operations through innovative process reengineering, achieving 45% improvement in productivity and 25% reduction in operational costs.',
  },
  {
    title: 'Innovation Strategy',
    description: 'R&D and innovation framework development',
    image: '/images/placeholder.jpg',
    details: 'Created and implemented an innovation framework that led to the successful launch of 3 breakthrough products and 15 patents within 24 months.',
  },
  {
    title: 'Sustainability Integration',
    description: 'ESG strategy and sustainable business practices',
    image: '/images/placeholder.jpg',
    details: 'Developed comprehensive ESG strategy resulting in 40% carbon footprint reduction and inclusion in major sustainability indices.',
  },
];

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-20 bg-black min-h-screen flex items-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Our Portfolio</h2>
          <p className="paragraph text-gray-300 max-w-2xl mx-auto">
            Explore our track record of successful partnerships and transformative solutions
            that have helped businesses achieve exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedItem(index)}
              className="cursor-pointer group"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full pt-[60%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                  <button className="mt-4 text-[#D4AF37] hover:text-white transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem !== null && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
                onClick={() => setSelectedItem(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-6"
              >
                <div className="absolute inset-0 bg-black/80" onClick={() => setSelectedItem(null)} />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-[#D4AF37]/20"
                >
                  <div className="relative">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#D4AF37] transition-colors duration-300"
                    >
                      <FaTimes className="w-5 h-5" />
                    </button>
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={portfolioItems[selectedItem].image}
                          alt={portfolioItems[selectedItem].title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair mb-4">{portfolioItems[selectedItem].title}</h3>
                        <p className="text-gray-300 mb-6">{portfolioItems[selectedItem].description}</p>
                        <p className="text-gray-400 leading-relaxed">{portfolioItems[selectedItem].details}</p>
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

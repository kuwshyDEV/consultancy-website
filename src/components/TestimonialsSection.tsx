'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImagePlaceholder from './ImagePlaceholder';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'James Richardson',
    position: 'CEO, Luxury Hotels International',
    company: 'LHI Group',
    quote: 'Elite Consult transformed our digital presence and operational efficiency. Their strategic insights led to a 200% increase in our premium bookings.',
  },
  {
    name: 'Sarah Chen',
    position: 'Creative Director',
    company: 'Maison de Mode',
    quote: 'Their understanding of luxury brand positioning is unmatched. They helped us successfully launch in three new markets with remarkable precision.',
  },
  {
    name: 'Michael Brooks',
    position: 'Managing Director',
    company: 'Private Wealth Partners',
    quote: "The team's expertise in digital transformation helped us modernize our services while maintaining the exclusive touch our clients expect.",
  },
  {
    name: 'Elena Rodriguez',
    position: 'Brand Director',
    company: 'Elite Automobiles',
    quote: 'Working with Elite Consult elevated our brand strategy and customer experience to new heights. They truly understand luxury.',
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      (prevIndex + newDirection + testimonials.length) % testimonials.length
    ));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/5" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto">
            Insights from industry leaders who have experienced our transformative consulting services
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          <div className="absolute inset-y-0 -left-4 md:-left-12 flex items-center">
            <button
              onClick={() => paginate(-1)}
              className="p-4 rounded-full bg-secondary/5 hover:bg-secondary/10 luxury-transition"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="text-secondary w-5 h-5" />
            </button>
          </div>

          <div className="relative h-[500px] md:h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-secondary/5 rounded-lg luxury-transition"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <ImagePlaceholder
                    width={300}
                    height={300}
                    category="testimonials"
                    index={currentIndex + 1}
                    text={currentTestimonial.name}
                    className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto luxury-transition"
                  />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                  <FaQuoteLeft className="text-3xl text-secondary/20 mb-6" />
                  <blockquote className="text-xl md:text-2xl mb-6 text-accent/90 italic font-serif">
                    "{currentTestimonial.quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{currentTestimonial.name}</h3>
                    <p className="text-secondary">{currentTestimonial.position}</p>
                    <p className="text-accent/60">{currentTestimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 -right-4 md:-right-12 flex items-center">
            <button
              onClick={() => paginate(1)}
              className="p-4 rounded-full bg-secondary/5 hover:bg-secondary/10 luxury-transition"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="text-secondary w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full luxury-transition ${
                  index === currentIndex ? 'bg-secondary w-6' : 'bg-secondary/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

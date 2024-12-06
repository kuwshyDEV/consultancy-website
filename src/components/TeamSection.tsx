'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImagePlaceholder from './ImagePlaceholder';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    name: 'Alexandra Chen',
    role: 'CEO & Strategic Director',
    bio: 'Former McKinsey partner with 15+ years of experience in luxury brand consulting.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'alexandra@eliteconsult.com'
    }
  },
  {
    name: 'Marcus Thompson',
    role: 'Innovation Lead',
    bio: 'Tech innovator with successful exits in luxury e-commerce and fintech.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@eliteconsult.com'
    }
  },
  {
    name: 'Isabella Martinez',
    role: 'Brand Strategist',
    bio: 'Award-winning brand strategist who transformed multiple luxury fashion houses.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'isabella@eliteconsult.com'
    }
  },
  {
    name: 'James Wilson',
    role: 'Digital Transformation',
    bio: 'Digital pioneer specializing in luxury retail and hospitality technology.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'james@eliteconsult.com'
    }
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const socialVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Team</h2>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto">
            Meet our exceptional team of industry experts and innovators
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <ImagePlaceholder
                  width={300}
                  height={400}
                  category="team"
                  index={index + 1}
                  text={member.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-6"
                >
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, link], i) => (
                      <motion.a
                        key={platform}
                        href={link}
                        variants={socialVariants}
                        initial="hidden"
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-secondary/90 flex items-center justify-center text-primary hover:bg-secondary transition-colors"
                      >
                        {platform === 'linkedin' && <FaLinkedin size={20} />}
                        {platform === 'twitter' && <FaTwitter size={20} />}
                        {platform === 'email' && <FaEnvelope size={20} />}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-secondary mb-3">{member.role}</p>
                <p className="text-accent/80">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

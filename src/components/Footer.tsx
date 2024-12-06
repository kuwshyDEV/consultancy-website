'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && /\S+@\S+\.\S+/.test(email)) {
      // Here you would typically send the email to your backend
      console.log('Newsletter subscription:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const links = {
    services: ['Strategy Consulting', 'Digital Transformation', 'Market Entry', 'Operations'],
    company: ['About Us', 'Team', 'Careers', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  const social = [
    { icon: <FaLinkedin />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' }
  ];

  return (
    <footer className="bg-primary pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Elite Consult</h2>
            <p className="text-accent/60 leading-relaxed">
              Transforming businesses through strategic innovation and exceptional execution.
            </p>
            <div className="flex gap-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-accent/60 hover:text-secondary transition-colors text-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Services</h3>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-accent/60 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Company</h3>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-accent/60 hover:text-secondary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Newsletter</h3>
            <p className="text-accent/60 mb-4">
              Subscribe to our newsletter for insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-primary border border-secondary/20 p-3 pr-12 focus:border-secondary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80 transition-colors"
                >
                  <FaArrowRight />
                </button>
              </div>
              {subscribed && (
                <p className="text-green-500 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-secondary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent/60">
              © {new Date().getFullYear()} Elite Consult. All rights reserved.
            </p>
            <ul className="flex gap-8">
              {links.legal.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-accent/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import SocialIcons from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData.jsx';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ isSubmitting: false, success: false, error: '' });
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const getFieldError = (field) => {
    if (!touched[field]) return '';
    if (!formData[field]) return `${field.replace('user_', '').charAt(0).toUpperCase() + field.slice(field.indexOf('_') + 1)} is required`;
    if (field === 'user_email' && !/\S+@\S+\.\S+/.test(formData.user_email)) return 'Valid email is required';
    return '';
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const { user_name, user_email, subject, message } = formData;
    if (!user_name || !user_email || !subject || !message) {
      setStatus({ ...status, error: 'All fields are required.' });
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(user_email)) {
      setStatus({ ...status, error: 'Email address is invalid.' });
      return false;
    }
    setStatus({ ...status, error: '' });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setStatus({ isSubmitting: true, success: false, error: '' });
    
    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        form.current,
        emailConfig.publicKey
      );

      setStatus({ isSubmitting: false, success: true, error: '' });
      setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      setTouched({});
    } catch (error) {
      console.error('Email error:', error);
      setStatus({ 
        isSubmitting: false, 
        success: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope/>, label: "Email", value: personalInfo.email },
    { icon: <FaPhone/>, label: "Phone", value: "Available upon request" },
    { icon: <FaMapMarkerAlt/>, label: "Location", value: "Remote / Worldwide" }
  ];

  const formFields = [
    { name: 'user_name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { name: 'user_email', label: 'Email', type: 'email', placeholder: 'Your email' }
  ];

  return (
    <main className="min-h-screen w-full py-16 md:py-24 relative bg-background" role="main">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-cyan/5 via-background to-neon-purple/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection direction="down" className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-base md:text-lg">
            Have a question or want to work together? Drop me a message below.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Info Card */}
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="h-full p-6 md:p-8 rounded-2xl bg-background-light/10 backdrop-blur-sm border border-neon-cyan/20">
              <div className="space-y-6 md:space-y-8">
                {contactInfo.map((item, i) => (
                  <motion.div 
                    key={item.label}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-background-light/5 border border-neon-cyan/10 hover:border-neon-cyan/30 transition-all"
                    whileHover={{ x: 8, backgroundColor: 'rgba(var(--neon-cyan-rgb), 0.05)' }}
                  >
                    <span className="text-neon-cyan text-xl p-2 rounded-lg bg-background-light/20 group-hover:bg-background-light/30 transition-colors">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-neon-cyan mb-1">{item.label}</p>
                      <p className="text-primary-text">{item.value}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-neon-cyan/10">
                  <h3 className="text-lg font-medium mb-4 text-primary-text">Connect With Me</h3>
                  <SocialIcons className="gap-4" />
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form Card */}
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <div className="p-6 md:p-8 rounded-2xl bg-background-light/10 backdrop-blur-sm border border-neon-purple/20">
              <AnimatePresence mode="wait">
                {status.success ? (
                  <motion.div 
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple p-[2px]">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <FaPaperPlane className="text-neon-cyan text-xl" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-primary-text">Message Sent!</h3>
                    <p className="text-secondary-text mb-8">Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                      onClick={() => setStatus({ isSubmitting: false, success: false, error: '' })}
                      className="px-6 py-2.5 text-neon-cyan border border-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2 focus:ring-offset-background"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    ref={form} 
                    onSubmit={handleSubmit} 
                    className="space-y-6" 
                    noValidate
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {formFields.map((field) => (
                        <div key={field.name} className="form-group">
                          <label htmlFor={field.name} className="block text-sm font-medium text-secondary-text mb-2">
                            {field.label} <span className="text-neon-cyan">*</span>
                          </label>
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            aria-invalid={!!getFieldError(field.name)}
                            aria-describedby={getFieldError(field.name) ? `${field.name}-error` : undefined}
                            className="w-full px-4 py-3 rounded-lg bg-background-light/20 border border-neon-cyan/30
                                     text-primary-text placeholder-secondary-text/50 transition-colors
                                     focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan focus:outline-none"
                          />
                          {getFieldError(field.name) && (
                            <p id={`${field.name}-error`} className="mt-1.5 text-sm text-red-500">
                              {getFieldError(field.name)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Subject field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-text mb-2">
                        Subject <span className="text-neon-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-lg bg-background-light/20 border border-neon-cyan/30 
                                 text-primary-text focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan 
                                 transition-colors"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-text mb-2">
                        Message <span className="text-neon-cyan">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        value={formData.message || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg bg-background-light/20 border border-neon-cyan/30 
                                 text-primary-text focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan 
                                 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status.isSubmitting}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple
                               text-white font-medium transition-all duration-200
                               hover:scale-[1.02] active:scale-[0.98]
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                               focus:outline-none focus:ring-2 focus:ring-neon-cyan focus:ring-offset-2
                               focus:ring-offset-background"
                    >
                      {status.isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div 
                            className="w-2 h-2 bg-white rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <FaPaperPlane className="transition-transform group-hover:translate-x-1" />
                        </span>
                      )}
                    </button>

                    {status.error && (
                      <motion.p 
                        className="text-red-500 text-sm mt-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {status.error}
                      </motion.p>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaStar } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import SocialIcons from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData.jsx';
import ParticleBackground from '../components/ParticleBackground';

const ContactPage = () => {
  // States
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ isSubmitting: false, isSubmitted: false, isError: false, message: '' });
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    if (formStatus.isSubmitted) {
      setShowStars(true);
      const timer = setTimeout(() => setShowStars(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus.isSubmitted]);

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false, message: '' });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Your message has been sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  // Components
  const renderStars = () => {
    if (!showStars) return null;
    
    return Array.from({ length: 20 }).map((_, index) => (
      <motion.div
        key={index}
        className="absolute"
        initial={{ top: "50%", left: `${Math.random() * 100}%`, opacity: 1, scale: 0 }}
        animate={{ top: `${Math.random() * 50}%`, opacity: [1, 0.8, 0], scale: [0, 1, 0.5] }}
        transition={{ duration: Math.random() * 1 + 0.5, delay: Math.random() * 0.5, ease: "easeOut" }}
      >
        <FaStar className="text-neon-cyan" style={{ fontSize: Math.random() * 15 + 5 }} />
      </motion.div>
    ));
  };

  const FormField = ({ label, name, type = "text", value, onChange, required = true, rows = null }) => {
    const isTextarea = type === "textarea";
    
    return (
      <div className="relative mb-6 group">
        <label 
          htmlFor={name} 
          className={`block transition-all duration-300 ${value ? "text-sm text-neon-cyan transform -translate-y-6" : "text-base text-primary-text"}`}
        >
          {label}
        </label>
        <div className="relative">
          {isTextarea ? (
            <textarea
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              rows={rows || 6}
              className="w-full bg-background-light/40 backdrop-blur-sm text-primary-text border border-neon-cyan/30 rounded-md py-3 px-4 focus:outline-none relative z-10"
            />
          ) : (
            <input
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              className="w-full bg-background-light/40 backdrop-blur-sm text-primary-text border border-neon-cyan/30 rounded-md py-3 px-4 focus:outline-none relative z-10"
            />
          )}
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute inset-px rounded-md bg-neon-cyan/10 backdrop-blur-sm" />
          </div>
        </div>
      </div>
    );
  };

  const ContactInfoCard = ({ icon, color, title, content }) => (
    <motion.div 
      className="flex items-start relative group"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <motion.div 
        className={`p-4 rounded-lg mr-4 backdrop-blur-sm relative`}
        style={{ backgroundColor: `rgba(var(--${color}-rgb), 0.2)` }}
        whileHover={{ scale: 1.1, boxShadow: `0 0 20px rgba(var(--${color}-rgb), 0.5)` }}
      >
        {React.cloneElement(icon, { className: `text-${color} text-xl` })}
        <motion.div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          initial={{ borderWidth: 1, borderColor: `rgba(var(--${color}-rgb), 0.3)` }}
          animate={{ 
            borderWidth: [1, 2, 1], 
            borderColor: [
              `rgba(var(--${color}-rgb), 0.3)`,
              `rgba(var(--${color}-rgb), 0.7)`,
              `rgba(var(--${color}-rgb), 0.3)`
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ border: "solid" }}
        />
      </motion.div>
      <div>
        <motion.h3 
          className="text-primary-text font-medium mb-1 relative inline-block"
          whileHover={{ color: `var(--${color})` }}
        >
          {title}
          <motion.span 
            className={`absolute left-0 -bottom-px h-px bg-${color}`}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>
        <p className="text-secondary-text">{content}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-background min-h-screen py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-40">
        <ParticleBackground color="var(--neon-cyan)" density={70} speed={0.5} />
      </div>
      
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-neon-cyan/20 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-neon-purple/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection direction="down">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent relative">
              Get In Touch
              <motion.div 
                className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>
          <motion.p 
            className="text-center text-secondary-text max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a question or want to work together? Drop me a message using the form below or connect through my social channels.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <AnimatedSection direction="left">
            <motion.div 
              className="bg-background-light/30 backdrop-blur-md rounded-lg p-8 h-full flex flex-col justify-between border border-neon-cyan/20 relative overflow-hidden"
              whileHover={{ boxShadow: "0 0 30px rgba(var(--neon-cyan-rgb), 0.2)" }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 rounded-full bg-neon-cyan/10 blur-xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 -ml-20 -mb-20 rounded-full bg-neon-purple/10 blur-xl" />
              
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
              </div>
              
              <div className="relative z-10">
                <motion.h2 
                  className="text-2xl font-bold mb-6 text-neon-cyan relative inline-block"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Contact Information
                  <motion.div 
                    className="absolute left-0 -bottom-1 h-0.5 bg-neon-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  />
                </motion.h2>
                <motion.p 
                  className="text-secondary-text mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  I'm interested in freelance opportunities – especially ambitious or large projects. 
                  However, if you have other requests or questions, don't hesitate to use the form.
                </motion.p>

                <div className="space-y-8">
                  <ContactInfoCard icon={<FaEnvelope />} color="neon-cyan" title="Email" content={personalInfo.email} />
                  <ContactInfoCard icon={<FaPhone />} color="neon-purple" title="Phone" content="Available upon request" />
                  <ContactInfoCard icon={<FaMapMarkerAlt />} color="electric-blue" title="Location" content="Remote / Worldwide" />
                </div>
              </div>

              <div className="mt-12 relative z-10">
                <motion.h3 
                  className="text-primary-text font-medium mb-4 relative inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Connect on Social Media
                  <motion.div 
                    className="absolute left-0 -bottom-1 h-0.5 bg-neon-purple"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </motion.h3>
                <SocialIcons iconSize="lg" />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Form Card */}
          <AnimatedSection direction="right">
            <motion.div 
              className="bg-background-light/30 backdrop-blur-md rounded-lg p-8 border border-neon-purple/20 relative overflow-hidden"
              whileHover={{ boxShadow: "0 0 30px rgba(var(--neon-purple-rgb), 0.2)" }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 -ml-20 -mt-20 rounded-full bg-neon-purple/10 blur-xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 -mr-20 -mb-20 rounded-full bg-neon-cyan/10 blur-xl" />
              
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple to-transparent" />
                <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-neon-cyan to-transparent" />
              </div>
              
              <motion.h2 
                className="text-2xl font-bold mb-8 text-neon-purple relative inline-block z-10"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Send Me a Message
                <motion.div 
                  className="absolute left-0 -bottom-1 h-0.5 bg-neon-purple"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </motion.h2>
              
              <div className="relative z-10">
                <AnimatePresence mode="wait">
                  {formStatus.isSubmitted ? (
                    <motion.div 
                      className="bg-background-light/60 rounded-lg p-8 text-center relative overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key="success"
                    >
                      {/* Success animation */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6 relative"
                      >
                        <motion.div 
                          className="absolute inset-0 rounded-full"
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(var(--neon-cyan-rgb), 0)",
                              "0 0 0 10px rgba(var(--neon-cyan-rgb), 0.3)",
                              "0 0 0 20px rgba(var(--neon-cyan-rgb), 0)"
                            ]
                          }}
                          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                        <FaCheckCircle className="text-white text-3xl" />
                      </motion.div>
                      
                      {renderStars()}
                      
                      <motion.h3 
                        className="text-2xl font-bold text-primary-text mb-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p 
                        className="text-secondary-text mb-6"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        {formStatus.message}
                      </motion.p>
                      <motion.button
                        className="px-6 py-3 bg-background border border-neon-cyan text-neon-cyan rounded-full transition-colors hover:bg-neon-cyan/20 flex items-center mx-auto"
                        onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                      >
                        <FaPaperPlane className="mr-2" />
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key="form"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField label="Name" name="name" value={formData.name} onChange={handleChange} />
                        <FormField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                      </div>
                      
                      <FormField label="Subject" name="subject" value={formData.subject} onChange={handleChange} />
                      <FormField label="Message" name="message" type="textarea" value={formData.message} onChange={handleChange} rows={5} />
                      
                      <div className="pt-4">
                        <motion.button
                          type="submit"
                          className="w-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium py-3 px-6 rounded-md relative group overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={formStatus.isSubmitting}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: [0, 0.1, 0], x: ["0%", "100%"] }}
                            transition={{ duration: 1 }}
                          />
                          
                          {formStatus.isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <span className="mr-3">Sending</span>
                              <div className="flex space-x-1">
                                {[0, 0.2, 0.4].map((delay, i) => (
                                  <motion.div 
                                    key={i}
                                    className="w-2 h-2 bg-white rounded-full"
                                    animate={{ y: [0, -6, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.6, delay }}
                                  />
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <span className="mr-2">Send Message</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                              >
                                <FaPaperPlane />
                              </motion.div>
                            </div>
                          )}
                        </motion.button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
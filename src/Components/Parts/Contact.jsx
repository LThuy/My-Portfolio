import React, { useState } from "react";
import "../../Style/PartsCSS/Contact.scss";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>Let's Work Together</h2>
      <p>Have an exciting project? Let’s talk!</p>

      {isSubmitted ? (
        <motion.p className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          🎉 Thank you for reaching out! I'll get back to you soon.
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label className={formData.name ? "filled" : ""}>Your Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className={formData.email ? "filled" : ""}>Your Email</label>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <label className={formData.message ? "filled" : ""}>Your Message</label>
          </div>

          <motion.button
            type="submit"
            className="contact-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      )}
    </motion.section>
  );
};

export default Contact;

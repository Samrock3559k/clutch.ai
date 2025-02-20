import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cancerCell from "../assets/images/cancer-cell.jpg";
import Cards from "../components/Cards";
import "../styles/Home.css";

const smoothTransition = {
  duration: 1.2,
  ease: "easeInOut", // Smoother easing curve
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="home-container">
      {/* Hero Section with Animation */}
      <section className="hero-section">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={smoothTransition}
        >
          <h1 className="hero-heading">Welcome to CLUTCH.AI</h1>
          <motion.p 
            className="hero-subtext"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...smoothTransition }}
          >
            Spot. Detect. Protect. <br /> AI for Early Cancer Detection.
          </motion.p>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...smoothTransition }}
          >
            Your trusted platform for AI-powered cancer diagnosis and research.
          </motion.p>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={smoothTransition}
        >
          <img src={cancerCell} alt="Cancer Cell" className="hero-image" />
        </motion.div>
      </section>

      {/* Mission Section with Animated Cards */}
      <section className="mission-section">
        <motion.div 
          className="mission-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="mission-heading">Our Mission</h2>
          <p className="mission-description">
            We aim to revolutionize cancer diagnosis and research through the power of AI.
          </p>
        </motion.div>

        {/* Cards Component */}
        <Cards />
      </section>
    </div>
  );
};

export default Home;

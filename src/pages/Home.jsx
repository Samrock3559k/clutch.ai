import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import cancerCell from "../assets/images/cancer-cell.jpg";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0f1c] text-white text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white bg-[#0a0f1c] min-h-screen px-6 md:px-10 pt-4">
      {/* Hero Section with Animation */}
      <section className="flex flex-col md:flex-row items-center justify-between py-20 text-center md:text-left">
        <motion.div 
          className="w-full md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-200">
            Welcome to CLUTCH.AI
          </h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Spot. Detect. Protect. <br /> AI for Early Cancer Detection.
          </motion.p>
          <motion.p 
            className="text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Your trusted platform for AI-powered cancer diagnosis and research.
          </motion.p>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={cancerCell}
            alt="Cancer Cell"
            className="max-w-sm md:max-w-2xl w-full rounded-lg shadow-lg border border-gray-700 object-cover drop-shadow-lg"
            style={{ filter: "brightness(1.1) contrast(1.1)" }}
          />
        </motion.div>
      </section>

      {/* Mission Section with Animated Cards */}
      <section className="py-20 text-center px-4 md:px-0">
        <motion.div 
          className="w-full md:w-3/4 mx-auto flex flex-col gap-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-200">Our Mission</h2>
          <p className="text-lg md:text-xl text-gray-400">
            We aim to revolutionize cancer diagnosis and research through the power of AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {["Early Detection", "Accurate Diagnosis", "Research & Innovation", "Pathology", "Biopsy", "Radiology"].map((title, index) => (
            <motion.div 
              key={index}
              className="bg-[#1a2332] p-6 rounded-lg shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-4">{title}</h3>
              <p className="text-gray-400">AI-driven insights to enhance {title.toLowerCase()} and improve patient outcomes.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

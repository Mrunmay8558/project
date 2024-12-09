"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-white transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          variants={textVariants}
          initial="hidden"
          animate={controls}
        >
          Welcome to Phoenix Amalgams Pvt. Ltd.
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.p
            className="text-lg leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Magnetite is our core business. Our dedicated production facility
            allows us to focus all of our efforts in ensuring the best quality
            product for our customers, and the best performing coal wash for
            their needs.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Phoenix Amalgams (PAPL) processes and produces heavy grade magnetite
            using a proprietary design process that was developed over a period
            of time through consistent efforts, sincerity, and innovation. PAPL
            is able to deliver a fit-for-purpose specification for each client
            in regards to magnetics, susceptibility, saturation moment, coercive
            force, specific gravity, particle size, and moisture. Since the
            commissioning of the PAPL magnetite plant we have continued to
            fine-tune our process to produce the highest quality heavy grade
            magnetite.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

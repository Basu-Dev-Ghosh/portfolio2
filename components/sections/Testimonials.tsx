"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    image: "/images/testimonials/sarah.jpg",
    text: "Basudev transformed our data infrastructure. His expertise in building scalable pipelines with Prefect and dbt reduced our processing time by 75%. The code quality is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "Ecom Analytics Inc",
    image: "/images/testimonials/michael.jpg",
    text: "Working with Basudev on our Amazon analytics platform was a game-changer. His pragmatic approach and attention to performance delivered a system that handles millions of records daily.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder",
    company: "AI Innovations Lab",
    image: "/images/testimonials/emily.jpg",
    text: "The AI chatbot system Basudev built exceeded our expectations. The RAG architecture provides accurate responses, and the multi-channel support works flawlessly. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={ref}
      className="section-padding bg-dark-lighter relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(184, 214, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            Client Feedback
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            What <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-gray text-xl max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-12 -left-12 z-0"
            >
              <Quote className="w-32 h-32 text-primary/10" />
            </motion.div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative bg-dark rounded-3xl p-12 md:p-16 border border-gray-dark/20"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-2xl text-white leading-relaxed mb-8 relative z-10">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bebas text-2xl text-primary">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bebas text-xl text-white uppercase">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-gray">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-full bg-dark-light border border-gray-dark/20 hover:border-primary/50 flex items-center justify-center transition-all group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray group-hover:text-primary transition-colors" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-gray-dark hover:bg-primary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-full bg-dark-light border border-gray-dark/20 hover:border-primary/50 flex items-center justify-center transition-all group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray group-hover:text-primary transition-colors" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

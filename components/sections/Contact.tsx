"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!subject || subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors in the form");
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setFormStatus("sent");
      toast.success(data.message || "Message sent successfully! I'll get back to you soon.");

      e.currentTarget.reset();

      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error: any) {
      setFormStatus("idle");
      toast.error(error.message || "Failed to send message. Please try again.");
      console.error("Contact form error:", error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <p className="font-bebas text-[20vw] uppercase leading-none text-primary">
          LET'S TALK
        </p>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-20 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Let's Build <span className="text-primary">Something Great</span> Together
          </h2>
          <p className="text-gray text-xl max-w-3xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and innovative
            ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className={`lg:col-span-2 space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}>
            {/* Main CTA Card */}
            <div className="bg-primary p-10 rounded-3xl">
              <h3 className="font-bebas text-5xl uppercase text-dark mb-4 leading-tight">
                READY TO START YOUR PROJECT?
              </h3>
              <p className="text-dark text-lg mb-6">
                Let's turn your ideas into reality with clean, scalable code.
              </p>
              
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-3 bg-dark text-primary font-bebas text-xl uppercase tracking-wider px-8 py-4 rounded-full hover:bg-dark/90 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-dark-light rounded-2xl border border-gray-dark/20">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bebas text-lg uppercase text-gray mb-1">Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-white hover:text-primary transition-colors font-semibold"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-dark-light rounded-2xl border border-gray-dark/20">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bebas text-lg uppercase text-gray mb-1">Location</p>
                  <p className="text-white font-semibold">{SITE_CONFIG.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="font-bebas text-lg uppercase text-gray mb-4">Connect With Me</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/basudev-ghosh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-dark-light rounded-xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/basudevghosh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-dark-light rounded-xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all hover:scale-110"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`lg:col-span-3 ${inView ? "animate-slide-up delay-200" : "opacity-0"}`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-dark-light p-10 rounded-3xl border border-gray-dark/20 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block font-bebas text-lg uppercase tracking-wider text-gray mb-2">
                    Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className={`w-full bg-dark border rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all ${
                      errors.name ? "border-red-500" : "border-gray-dark/20"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block font-bebas text-lg uppercase tracking-wider text-gray mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className={`w-full bg-dark border rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all ${
                      errors.email ? "border-red-500" : "border-gray-dark/20"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <label className="block font-bebas text-lg uppercase tracking-wider text-gray mb-2">
                  Subject *
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  className={`w-full bg-dark border rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all ${
                    errors.subject ? "border-red-500" : "border-gray-dark/20"
                  }`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="block font-bebas text-lg uppercase tracking-wider text-gray mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className={`w-full bg-dark border rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-gray-dark/20"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={formStatus !== "idle"}
                whileHover={{ scale: formStatus === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: formStatus === "idle" ? 0.98 : 1 }}
                className="w-full bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-8 py-6 rounded-full hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {formStatus === "sending" && (
                  <motion.div
                    className="absolute inset-0 bg-primary-dark"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  {formStatus === "idle" && (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                  {formStatus === "sending" && <span>Sending...</span>}
                  {formStatus === "sent" && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="mt-24 overflow-hidden">
          <div className="font-bebas text-6xl md:text-9xl uppercase text-primary/10 whitespace-nowrap animate-marquee">
            BASUDEV GHOSH • SOFTWARE DEVELOPER • BASUDEV GHOSH • SOFTWARE DEVELOPER • BASUDEV GHOSH • SOFTWARE DEVELOPER •
          </div>
        </div>
      </div>
    </section>
  );
}
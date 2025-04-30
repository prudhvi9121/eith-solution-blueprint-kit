import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf8OR98MWDReYnL_u08AWmYoWvKler_9hxCFPDJLMqEnNrtjA/formResponse";

const ENTRY_IDS = {
  name: "entry.1767868725",
  email: "entry.2103629314",
  subject: "entry.2000418460",
  message: "entry.530123941"
};


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formBody = new URLSearchParams();
    formBody.append(ENTRY_IDS.name, formData.name);
    formBody.append(ENTRY_IDS.email, formData.email);
    formBody.append(ENTRY_IDS.subject, formData.subject);
    formBody.append(ENTRY_IDS.message, formData.message);
  
    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody.toString()
      });
  
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]" style={{ backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-500 text-sm font-medium mb-6">
                    Get in Touch
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4 text-gray-900">
                    Let's Build Something 
                    <span className="relative ml-2">
                      Amazing
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 rounded-full"></span>
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Have a project in mind? We'd love to discuss how we can help bring your vision to life.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-red-50 border border-red-100">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email us at</p>
                      <p className="font-medium text-gray-900">info@Eith.in</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-red-50 border border-red-100">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Find us at</p>
                      <p className="font-medium text-gray-900">Your Location, City, Country</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-8 rounded-2xl bg-white shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-400 transition-colors duration-200"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-400 transition-colors duration-200"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-400 transition-colors duration-200"
                        placeholder="Project Discussion"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder-gray-400 transition-colors duration-200 resize-none"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 shadow-lg shadow-red-500/25"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-100/50 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-100/50 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

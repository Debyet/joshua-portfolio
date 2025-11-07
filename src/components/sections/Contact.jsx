import { RevealOnScroll } from "../RevealOnScroll";
import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_hq4sh1p";
  const TEMPLATE_ID = "template_aqw3nrr";
  const PUBLIC_KEY = "rkNwmxSUhH_luQpTL";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-white/10"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Email..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-orange-500 focus:bg-blue-500/5"
              ></textarea>
            </div>

          <button
  type="submit"
  className="w-full bg-orange-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
>
  Send Message
</button>

          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

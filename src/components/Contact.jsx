import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to email client
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:kumarankit42131@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-black text-white min-h-screen px-8 py-16">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 border-b border-gray-700 pb-4">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>

            <p className="mb-4">
              <span className="font-bold">Email: </span>
              <a
                href="mailto:kumarankit42131@gmail.com"
                className="text-red-400 hover:underline"
              >
                kumarankit42131@gmail.com
              </a>
            </p>

            <p className="mb-4">
              <span className="font-bold">Phone: </span>
              (+91) 6203939251
            </p>

            <p className="text-gray-300 leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out through email or phone, 
              and I’ll get back to you as soon as possible.
            </p>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-red-500 transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-red-500 transition"
                  required
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-red-500 transition"
                required
              ></textarea>

              <button
                type="submit"
                className="px-6 py-2 border border-white hover:bg-red-500 hover:border-red-500 transition rounded-md"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

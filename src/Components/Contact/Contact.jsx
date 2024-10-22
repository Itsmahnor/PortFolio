import React from 'react';

const ContactForm = () => {
  return (
    <div className=" md:h-[70vh] h-auto flex justify-center items-center bg-[#121212] py-12 ">
      <div className="w-full max-w-lg bg-[#1a1a1a] p-8 rounded-lg shadow-lg animate1">
        <h1 className="text-4xl font-bold text-center text-[#00ffff] mb-8">Get in Touch</h1>
        
        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Message</label>
          <textarea
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="w-full px-6 py-3 text-lg text-white bg-[#00ffff] hover:bg-[#00e6e6] font-bold rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

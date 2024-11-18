import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

   

    // Send the email via EmailJS
    emailjs
      .sendForm(
        "service_2ar60go", 
        "template_2lcctok",
        formRef.current, 
        "JFq1OCMy1YuA4kKpf",    
      
    
      )
      .then(
        (result) => {
          console.log("Email sent: ", result.text);
          alert("Message sent successfully!");
          
          // Clear form fields
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          console.error("Error sending email: ", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="md:h-[70vh] h-auto flex justify-center items-center bg-[#121212] py-12"
      id="contact"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-[#1a1a1a] p-8 rounded-lg shadow-lg animate1"
      >
        <h1 className="text-4xl font-bold text-center text-[#00ffff] mb-8">
          Get in Touch
        </h1>

        {/* Name Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Name</label>
          <input
            ref={nameRef}
            type="text"
            name="to_name"
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none  focus:ring-[#00ffff] transition duration-300"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Email</label>
          <input
            ref={emailRef}
            type="email"
            name="to_email"
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label className="block text-white text-lg mb-2">Your Message</label>
          <textarea
            ref={messageRef}
            name="message"
            className="w-full px-4 py-2 bg-[#121212] border border-[#00ffff] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ffff] transition duration-300"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-6 py-3 text-lg text-white bg-[#00ffff] hover:bg-[#00e6e6] font-bold rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

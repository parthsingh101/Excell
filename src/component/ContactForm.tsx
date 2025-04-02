"use client";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg mt-12">
      <h2 className="text-2xl text-white text-center mb-4">Contact Us</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-3 h-32 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
          required
        ></textarea>
        <button type="submit" className="w-full p-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

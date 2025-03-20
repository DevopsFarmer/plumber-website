"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message
    const message = `Hello, I want to inquire about your services.\n\n` +
                    `🔹 *Name:* ${formData.fullName}\n` +
                    `📧 *Email:* ${formData.email}\n` +
                    `📞 *Phone:* ${formData.phone}\n` +
                    `🔧 *Service:* ${formData.service}\n` +
                    `📝 *Message:* ${formData.message}`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your business WhatsApp number (use international format without +)
    const whatsappNumber = "919876543210";  // Example: India (+91) 9876543210

    // Open WhatsApp chat with pre-filled message
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-brown-800 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-brown-800 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label className="block text-brown-800 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Phone"
            required
          />
        </div>
        <div>
          <label className="block text-brown-800 font-medium">Services</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          >
            <option value="">Select a service</option>
            <option value="Installation">Installation</option>
            <option value="Repair">Repair</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      {/* Message Box */}
      <div className="mt-4">
        <label className="block text-brown-800 font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="mt-4">
        <button type="submit" className="bg-[#B15B30] text-white px-6 py-2 rounded hover:bg-[#913E1D]">
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

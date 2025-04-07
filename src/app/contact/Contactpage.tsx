"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const subject = "Service Inquiry from Website";
    const body =
      `Hello, I want to inquire about your services.\n\n` +
      `🔹 Name: ${formData.fullName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📞 Phone: ${formData.phone}\n` +
      `🔧 Service: ${formData.service}\n` +
      `📝 Message: ${formData.message}`;
  
    const mailtoLink = `mailto:tiotrilok@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    window.location.href = mailtoLink;
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-300 bg-[#F7F7F7] rounded mt-1 placeholder-black"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-300 bg-[#F7F7F7] rounded mt-1 placeholder-black"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-300 bg-[#F7F7F7] rounded mt-1 placeholder-black"
            placeholder="Phone"
            required
          />
        </div>
        <div>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border text-black border-gray-300 bg-[#F7F7F7] rounded mt-1 placeholder-black"
            required
          >
            <option value="">Select a service</option>
            <option value="Installation">Installation</option>
            <option value="Repair">Repair</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border text-black border-gray-300 bg-[#F7F7F7] rounded mt-1 placeholder-black"
          placeholder="Message"
          required
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="bg-[#B15B30] text-white px-6 py-2 rounded hover:bg-[#913E1D]"
        >
          Send Email
        </button>
      </div>
    </form>
  );
}

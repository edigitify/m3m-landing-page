import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/send-email', formData);
      alert('Message sent successfully!');
    } catch (err) {
      alert('Failed to send message.');
    }
  };

  return (
    <section className="bg-white py-16 px-4 text-center">
      <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
      <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="w-full border p-3 rounded" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-3 rounded" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" className="w-full border p-3 rounded" onChange={handleChange} />
        <textarea name="message" placeholder="Message" className="w-full border p-3 rounded h-32" onChange={handleChange} required />
        <button type="submit" className="bg-yellow-400 px-6 py-3 rounded text-black font-semibold">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;

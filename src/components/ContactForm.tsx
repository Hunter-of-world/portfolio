"use client";

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-black border-t border-black dark:border-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="mb-12">
          <div dir="rtl" className="text-right text-sm text-gray-500 dark:text-gray-400 pb-1 font-arabic">تواصل معي</div>
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">Have a project in mind or want to discuss system architecture? Let's talk.</p>
        </div>

        {status === 'success' ? (
          <div className="p-8 border-2 border-black dark:border-white text-center">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">Message Sent</h3>
            <p className="text-black dark:text-white mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-sm font-bold uppercase tracking-wider border-b-2 border-black dark:border-white pb-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-4 border-2 bg-transparent text-black dark:text-white focus:outline-none focus:ring-0 ${
                  status === 'error' ? 'border-black dark:border-white' : 'border-black dark:border-white'
                } disabled:opacity-50`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-4 border-2 bg-transparent text-black dark:text-white focus:outline-none focus:ring-0 ${
                  status === 'error' ? 'border-black dark:border-white' : 'border-black dark:border-white'
                } disabled:opacity-50`}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-4 border-2 bg-transparent text-black dark:text-white focus:outline-none focus:ring-0 resize-none ${
                  status === 'error' ? 'border-black dark:border-white' : 'border-black dark:border-white'
                } disabled:opacity-50`}
              />
            </div>

            {status === 'error' && (
              <div className="text-black dark:text-white font-bold border-l-4 border-black dark:border-white pl-4 py-2">
                {errorMessage || 'Failed to send the message. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest py-5 px-8 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 flex justify-center items-center"
            >
              {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

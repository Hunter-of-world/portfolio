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
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">Have a project in mind or want to discuss system architecture? Let's talk.</p>
        </div>

        {status === 'success' ? (
          <div className="p-6 bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800 rounded text-center">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-2">Message Sent Successfully!</h3>
            <p className="text-green-700 dark:text-green-500">Thank you for reaching out. I'll get back to you shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm font-semibold underline text-green-800 dark:text-green-400"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-3 border bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  status === 'error' ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } disabled:opacity-50`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-3 border bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  status === 'error' ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } disabled:opacity-50`}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-3 border bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                  status === 'error' ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } disabled:opacity-50`}
              />
            </div>

            {status === 'error' && (
              <div className="text-red-600 dark:text-red-400 text-sm font-medium">
                {errorMessage || 'Failed to send the message. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 px-8 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 flex justify-center items-center"
            >
              {status === 'submitting' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

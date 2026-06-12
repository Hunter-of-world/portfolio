"use client";

import React, { useState } from 'react';
import { useI18n } from '../app/i18n';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useI18n();

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
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">{t.nav.getInTouch}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t.nav.contactSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            {status === 'success' ? (
          <div className="p-8 border-2 border-black dark:border-white text-center">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4 uppercase tracking-wider">{t.contact.sent}</h3>
            <p className="text-black dark:text-white mb-8">{t.contact.sentDesc}</p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-sm font-bold uppercase tracking-wider border-b-2 border-black dark:border-white pb-1 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {t.contact.sendAnother}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                className={`w-full p-4 border-2 bg-transparent text-black dark:text-white focus:outline-none focus:ring-0 ${
                  status === 'error' ? 'border-black dark:border-white' : 'border-black dark:border-white'
                } disabled:opacity-50`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">{t.contact.email}</label>
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
              <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-2">{t.contact.message}</label>
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
              <div className="text-black dark:text-white font-bold border-s-4 border-black dark:border-white ps-4 py-2">
                {errorMessage || 'Failed to send the message. Please try again.'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest py-5 px-8 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70 flex justify-center items-center"
            >
              {status === 'submitting' ? t.contact.sending : t.contact.sendMessage}
            </button>
          </form>
        )}
          </div>
          
          <div className="md:col-span-1 flex flex-col gap-8 md:ps-8 md:border-s-2 border-t-2 md:border-t-0 border-black dark:border-white pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-6 uppercase tracking-wider">{t.nav.socialMedia}</h3>
              <div className="flex flex-col gap-6">
                <a 
                  href="https://github.com/Hunter-of-world" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                  <div className="p-3 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                  </div>
                  <span className="font-bold text-lg tracking-wider uppercase">GitHub</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/zaidmarwannajah" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                  <div className="p-3 border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <span className="font-bold text-lg tracking-wider uppercase">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

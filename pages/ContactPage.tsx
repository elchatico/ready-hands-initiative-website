
import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { MailIcon, PhoneIcon, InstagramIcon, TikTokIcon } from '../components/icons';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-rh-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-2 text-lg text-rh-light-blue">{subtitle}</p>
        </div>
    </div>
);


const ContactPage: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Thank you for your message! We will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };


  return (
    <div>
        <PageHeader title="Contact Us" subtitle="We'd love to hear from you." />
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-rh-blue">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Whether you want to book a training, sponsor a program, or just say hello, feel free to reach out through any of the channels below.
                    </p>
                    <div className="mt-8 space-y-6">
                        <div className="flex items-center">
                            <PhoneIcon className="w-8 h-8 text-rh-red" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Phone / WhatsApp</h3>
                                <a href="tel:+254702093678" className="text-gray-600 hover:text-rh-red transition-colors">+254 702 093 678</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <MailIcon className="w-8 h-8 text-rh-red" />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">Email</h3>
                                <a href="mailto:readyhandsinitiative.ke@gmail.com" className="text-gray-600 hover:text-rh-red transition-colors">readyhandsinitiative.ke@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                             <InstagramIcon className="w-8 h-8 text-rh-red" />
                             <div className="ml-4">
                                <h3 className="text-lg font-semibold">Instagram</h3>
                                <a href="https://www.instagram.com/readyhandske" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rh-red transition-colors">@readyhandske</a>
                            </div>
                        </div>
                        <div className="flex items-center">
                             <TikTokIcon className="w-8 h-8 text-rh-red" />
                             <div className="ml-4">
                                <h3 className="text-lg font-semibold">TikTok</h3>
                                <a href="https://www.tiktok.com/@readyhands" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rh-red transition-colors">@readyhands</a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-rh-blue">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rh-red focus:border-rh-red sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rh-red focus:border-rh-red sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rh-red focus:border-rh-red sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-rh-red text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                        {status && <p className="text-center text-green-600">{status}</p>}
                    </form>
                </AnimatedSection>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;

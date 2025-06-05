// components/Hero.jsx
import React from 'react';
import profile from '../assets/profile.jpg';
import { Mail, Linkedin, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 z-0">
        {/* Decorative Background Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/30 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-6">
        <div className="w-48 h-48 mx-auto mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 bg-white rounded-full overflow-hidden">
            <img src={profile} alt="Profile" className="object-cover w-full h-full rounded-full" />
          </div>
        </div>

        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">Deepak V</h1>
        <p className="text-xl text-slate-700 mb-2 animate-slide-up">Business Analyst @ Mindsprint</p>
        <p className="text-indigo-600 font-semibold mb-8 animate-fade-in-delay">Data • Analytics • Strategy</p>
        <p className="text-slate-600 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
          Transforming complex data into strategic insights and driving operational excellence through innovative analytics solutions.
        </p>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-2">
          <a href="mailto:deepak@example.com" className="p-3 bg-white rounded-xl shadow hover:scale-110 transition-transform"><Mail className="text-indigo-600" /></a>
          <a href="#" className="p-3 bg-white rounded-xl shadow hover:scale-110 transition-transform"><Linkedin className="text-blue-600" /></a>
          <a href="#" className="p-3 bg-white rounded-xl shadow hover:scale-110 transition-transform"><Github className="text-slate-800" /></a>
        </div>

        <ChevronDown className="mx-auto text-indigo-400 animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default Hero;

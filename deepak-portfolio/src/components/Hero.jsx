import React from 'react';
import { ChevronDown, Mail, Linkedin, Github, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-slate-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-slate-200 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="text-center z-10 animate-fade-in">
        <div className="w-40 h-40 mx-auto mb-8 relative group">
          <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 rounded-full shadow-xl transform group-hover:scale-105 transition-transform duration-300"></div>
          <div className="absolute inset-4 bg-slate-100 rounded-full flex items-center justify-center">
            <BarChart3 size={48} className="text-slate-600" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Deepak V
        </h1>
        <p className="text-xl text-slate-600 mb-8 animate-slide-up">
          Business Analyst @ Mindsprint
        </p>
        <p className="text-slate-500 max-w-md mx-auto mb-12 leading-relaxed">
          Transforming data into strategic insights and driving operational excellence through analytics
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <a href="mailto:deepak@example.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
            <Mail size={20} className="text-slate-600" />
          </a>
          <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
            <Linkedin size={20} className="text-slate-600" />
          </a>
          <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
            <Github size={20} className="text-slate-600" />
          </a>
        </div>
        
        <ChevronDown className="animate-bounce text-slate-400 mx-auto" size={32} />
      </div>
    </section>
  );
};

export default Hero;
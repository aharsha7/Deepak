import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">About Me</h3>
        <div className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <p className="text-slate-600 text-lg leading-relaxed">
            Passionate Business Analyst with a keen eye for data-driven insights and process improvements. 
            Started my journey at Mindsprint as an intern, gaining hands-on experience in real-time reporting, 
            business intelligence tools, and stakeholder collaboration. I specialize in translating complex 
            data into actionable business strategies that drive growth and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
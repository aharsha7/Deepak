import React from 'react';
import { TrendingUp, BarChart3 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Experience</h3>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-slate-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-800">Business Analyst</h4>
                <p className="text-slate-600 mb-2">Mindsprint • July 2023 - Present</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Driving strategic insights for internal and client-facing teams</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Translating data into actionable business recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Enhancing operational efficiency through analytics solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="text-slate-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-slate-800">Business Analyst Intern</h4>
                <p className="text-slate-600 mb-2">Mindsprint • September 2022 - May 2023</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Assisted in gathering business requirements and documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Supported dashboard creation and performance analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Worked with data visualization tools like Power BI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
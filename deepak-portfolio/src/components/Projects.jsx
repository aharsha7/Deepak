import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-300 transition-colors duration-300">
              <BarChart3 className="text-slate-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">KPI Dashboard Automation</h4>
            <p className="text-slate-600 leading-relaxed">
              Developed automated KPI dashboards for department-level performance tracking, 
              reducing manual effort by 60% and improving data accuracy across teams.
            </p>
          </div>
          
          <div className="group bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-300 transition-colors duration-300">
              <TrendingUp className="text-slate-600" size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-4">Client Feedback Analytics</h4>
            <p className="text-slate-600 leading-relaxed">
              Created sentiment analysis tool to identify recurring themes in feedback, 
              improving NPS score visibility and enabling proactive client relationship management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
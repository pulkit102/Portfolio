import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and user experience'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'User-Centric',
      description: 'Designing with empathy and accessibility in mind'
    },
    {
      icon: <Coffee className="w-8 h-8 text-yellow-400" />,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Full Stack Developer and Software Engineering enthusiast currently pursuing my B.Tech in Information Technology. I love building responsive, scalable web applications and solving real-world problems through code.
            </p>
             <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in technologies like React, Node.js, Express, MongoDB, and a strong grasp of DSA and OOP, I strive to write clean, maintainable, and efficient code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm constantly exploring new tools and frameworks, and I enjoy collaborating on projects that make a real impact. Currently seeking opportunities to grow as a Software Development Intern and contribute meaningfully to innovative teams.


            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Express.js', 'Node.js', 'Mongodb', 'Java', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
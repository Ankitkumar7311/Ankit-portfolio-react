import React from "react";

const About = () => {
  const timeline = [
    { role: "React Developer", company: "Working on E-learning Projects", year: "2025" },
    { role: "Frontend Developer", company: "Personal Projects", year: "2025" },
    { role: "React Developer", company: "Miranada Portfolio", year: "2024" },
    { role: "National-level 400m Sprinter", company: "Athletics Championship", year: "2023" },
  ];
  
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JAVASCRIPT", level: 80 },
    { name: "REACT", level: 93 },
    { name: "SQL", level: 90 },
    { name: "JAVA" , level: 80}
  ];
  const services = [
    {
      title: "UI & UX Design",
      desc: "Creating modern and responsive interfaces using React and Tailwind CSS, focusing on smooth user experiences and clean designs.",
    },
    {
      title: "Frontend Development",
      desc: "Building interactive web applications using React, JavaScript, and AJAX with emphasis on performance, responsiveness, and maintainable code.",
    },
    {
      title: "Portfolio  Design",
      desc: "Designing and deploying professional portfolio websites , integrating creativity, user-centric layouts, and modern web standards.",
    },
  ];
  

  return (
    <div className="bg-black text-white min-h-screen px-8 py-16 space-y-24">

     
      <section className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 border-b border-gray-700 pb-4">
          About me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">A bit about myself</h3>
          </div>
          <div>
            <p className="text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer with a strong focus on building 
modern, user-friendly, and scalable web applications. I enjoy solving 
complex problems with clean and efficient code. With expertise in 
JavaScript, React, and backend technologies, I aim to deliver digital 
solutions that create real impact.

            </p>
          </div>
        </div>
      </section>

    
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Work Timeline</h2>
        <div className="space-y-6">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b border-gray-700 pb-3 hover:text-white transition duration-300"
            >
              <span className="text-lg">{item.role}</span>
              <span className="text-gray-400">{item.company}</span>
              <span className="text-gray-500">{item.year}</span>
            </div>
          ))}
        </div>
      </section>

    
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="space-y-8">
          {skills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="italic text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-500 hover:bg-red-400"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 border border-gray-700 rounded-2xl hover:shadow-xl hover:shadow-red-500/30 transition duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;

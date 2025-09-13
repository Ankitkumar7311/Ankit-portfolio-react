import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Miranada Clone",
      description: `Miranda is a modern interactive portfolio website built using HTML, CSS, JavaScript, and animations**.
      It showcases creative projects with bold visuals, minimal design, and smooth interactive effects.
      `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/miranada/",
    },
    {
      title: "Image Search Application",
      description: `Image Search App built with HTML, CSS, JS uses API integration to fetch and display images.
      It’s simple, responsive, and provides quick image search results.
      `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/image-search-app/",
    },
    {
      title: "Rapido CLone",
      description: `Rapido-Clone is a replica ride-booking UI built using HTML, CSS, and JavaScript, showcasing interactive layouts and seamless responsiveness.
      It mimics core booking screens with clean design and smooth user interactions.
      `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/Rapido-clone/",
    },
    {
      title: "Ray-Romano-Contracting",
      description: `Ray Romano Contracting Clone built with HTML, CSS, JS replicates a contracting business website’s layout, showcasing services, portfolio, and contact info.
      It emphasizes clean design, responsive imagery, and structured sections.
      `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/Ray-Romano-Contracting-clone/",
    },
    {
      title: "Dictionary Application",
      description: `Dictionary App built with HTML, CSS, and JavaScript lets users search for word meanings and example usages.
      It integrates an external dictionary API for real-time results and displays them cleanly and responsively.
           `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/Dictionary-App/",
    },
    {
      title: "Zomato Clone",
      description: `Zomato Clone built with HTML, CSS, and JavaScript replicates the Zomato platform’s core UI and features.
      It includes restaurant search, filters, and a responsive layout for a realistic user experience.
           `,
      img: "https://via.placeholder.com/600x400",
      link: "https://ankitkumar7311.github.io/Zomato-clone/",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg text-gray-300 mb-12">
          A selection of my recent work and projects
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-1000 border-2 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 px-4">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

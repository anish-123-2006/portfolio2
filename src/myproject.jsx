import { useState } from "react";
import "./myproject.css";
import portfolioimg from "./assets/portfolio.png";
import weatherimg from "./assets/weather.png";
import todoimg from "./assets/todo.png";
import spotifyimg from "./assets/spotify.png";
import movieimg from "./assets/moviefinder.png";

const projects = [
  {
    number: "01",
    category: "REACT DEVELOPMENT",
    title: "Movie App",
    desc: "A movie browsing application built with React and TMDB API. Users can explore trending movies, search titles and view detailed movie information.",
    tech: ["React", "TMDB API", "CSS"],
    image: `${movieimg}`,
    alt: "Movie App",
       livebtn:" https://moviefinder-lo5g.vercel.app/",
    gitbtn:"https://github.com/anish-123-2006/moviefinder",
  },
  {
    number: "02",
    category: "REACT DEVELOPMENT",
    title: "Portfolio Website",
    desc: "A modern portfolio website built to showcase my skills, projects and frontend development journey with a premium UI.",
    tech: ["React", "CSS", "Responsive Design"],
    image: `${portfolioimg}`,
    alt: "Portfolio Website",
       livebtn:" https://github.com/anish-123-2006/spotify_clone",
    gitbtn:"https://anish-123-2006.github.io/spotify_clone/",
  },
  {
    number: "03",
    category: "JAVASCRIPT DEVELOPMENT",
    title: "Weather App",
    desc: "A weather forecasting application that fetches real-time weather data from an API and displays current conditions with a clean user interface.",
    tech: ["JavaScript", "Weather API", "CSS"],
    image: `${weatherimg}`,
    alt: "Weather App",
    livebtn:" https://anish-123-2006.github.io/weather-app/",
    gitbtn:"https://github.com/anish-123-2006/weather-app",

  },
  {
    number: "04",
    category: "JAVASCRIPT DEVELOPMENT",
    title: "To Do App",
    desc: "A task management application that stores data in browser local storage, allowing users to manage tasks even after refreshing the page.",
    tech: ["JavaScript", "Local Storage", "CSS"],
    image: `${todoimg}`,
    alt: "To Do App",
       livebtn:" https://anish-123-2006.github.io/todo/",
    gitbtn:"https://github.com/anish-123-2006/todo",
  },
  {
    number: "05",
    category: "FRONTEND DEVELOPMENT",
    title: "Spotify Clone",
    desc: "A responsive music player web application featuring playlist management, song controls and a modern Spotify-inspired UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:  `${spotifyimg}`,
    alt: "Spotify Clone",
        livebtn:"https://anish-123-2006.github.io/spotify_clone/ ",
    gitbtn:"https://github.com/anish-123-2006/spotify_clone",
  },
];

function ProjectCard({ project, reverse }) {
  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      <div className="project-content">
        <span className="project-number">{project.number}</span>
        <h5>{project.category}</h5>
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        <div className="tech-stack">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-buttons">
<button onClick={() => window.open(project.livebtn, "_blank")}>
  Live Demo
</button>
          <button onClick={() => window.open(project.gitbtn, "_blank")}>
  Github
</button>
        </div>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  );
}

function Myproject() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length);
  const next = () => setCurrent((c) => (c + 1) % projects.length);

  return (
    <section className="project-section">
      <div className="project-header">
        <h4>MY PROJECTS</h4>
        <h1>Things I've Built</h1>
        <p>A collection of projects that showcase my skills, creativity and passion for building modern web experiences.</p>
      </div>

      {/* DESKTOP - all cards stacked */}
      <div className="projects-desktop">
        {projects.map((p, i) => (
          <ProjectCard key={p.number} project={p} reverse={i % 2 !== 0} />
        ))}
      </div>

      {/* MOBILE - one at a time slider */}
      <div className="projects-mobile">
        <div className="slider-wrapper">
          <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {projects.map((p) => (
              <div className="slide" key={p.number}>
                <ProjectCard project={p} reverse={false} />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={prev} aria-label="Previous">&#8592;</button>
          <div className="slider-dots">
            {projects.map((_, i) => (
              <button key={i} className={`slider-dot${i === current ? " dot-active" : ""}`} onClick={() => setCurrent(i)} aria-label={`Project ${i + 1}`} />
            ))}
          </div>
          <button className="slider-btn" onClick={next} aria-label="Next">&#8594;</button>
        </div>

        <p className="slider-counter">{current + 1} / {projects.length}</p>
      </div>
    </section>
  );
}

export default Myproject;
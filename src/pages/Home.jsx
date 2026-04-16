import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "ALVION Driver Monitoring",
    desc: "Real-time drowsiness detection using ML Kit, TensorFlow Lite, and mobile camera input.",
    impact: "Built for safer long-distance driving with fast on-device alerts.",
    tags: ["AI", "Mobile", "Safety"],
  },
  {
    title: "CI/CD Pipeline System",
    desc: "GitOps delivery pipeline using Jenkins, ArgoCD, Docker, and Kubernetes.",
    impact: "Automated builds and releases so teams can ship with fewer manual steps.",
    tags: ["Cloud", "DevOps", "Kubernetes"],
  },
  {
    title: "React Portfolio",
    desc: "Responsive portfolio and travel blog built with React, Vite, and React Router.",
    impact: "A polished home for projects, writing, and professional contact details.",
    tags: ["React", "Vite", "UX"],
  },
];

function Home() {
  const [activeProject, setActiveProject] = useState(projects[0].title);
  const featuredProject =
    projects.find((project) => project.title === activeProject) ?? projects[0];
  const heroImage = `${import.meta.env.BASE_URL}images/golden_gate.avif`;

  return (
    <main>
      <section className="hero" style={{ "--hero-image": `url(${heroImage})` }}>
        <div className="hero-content">
          <p className="eyebrow">Software Engineering Student</p>
          <h1>Hi, I'm Thanh Dat Vu.</h1>
          <p>
            I build practical software across cloud systems, mobile apps, and AI
            tools, with a focus on clean user experiences and reliable delivery.
          </p>
          <div className="hero-actions">
            <LinkButton href="#projects">View Projects</LinkButton>
            <LinkButton href="#contact" variant="secondary">Contact Me</LinkButton>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div>
          <p className="section-label">About</p>
          <h2>Engineering with a product mindset.</h2>
        </div>
        <div className="section-copy">
          <p>
            I'm a software engineering student who enjoys building systems that
            feel useful, fast, and clear. My work spans cloud engineering, mobile
            development, and AI, and I like projects where the technical details
            connect directly to a real person using the product.
          </p>
          <ul className="quick-facts" aria-label="Portfolio highlights">
            <li>
              <strong>Cloud</strong>
              <span>Jenkins, ArgoCD, Docker, Kubernetes</span>
            </li>
            <li>
              <strong>Mobile</strong>
              <span>Android, camera input, on-device ML</span>
            </li>
            <li>
              <strong>Frontend</strong>
              <span>React, Vite, responsive UI</span>
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <p>
            A mix of class work, personal builds, and systems projects that show
            how I approach real problems with reusable components and clear
            interfaces.
          </p>
        </div>

        <div className="project-spotlight" aria-live="polite">
          <p className="section-label">Current focus</p>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.impact}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              isActive={project.title === activeProject}
              onSelect={() => setActiveProject(project.title)}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <p className="section-label">Contact</p>
        <h2>Let's build something useful.</h2>
        <div className="contact-links">
          <a href="mailto:thanhdatvu.203@gmail.com">thanhdatvu.203@gmail.com</a>
          <a href="https://github.com/thanhdatvu111" target="_blank" rel="noreferrer">
            github.com/thanhdatvu111
          </a>
        </div>
      </section>
    </main>
  );
}

function LinkButton({ href, variant = "primary", children }) {
  return (
    <a className={`button ${variant === "secondary" ? "button-secondary" : ""}`} href={href}>
      {children}
    </a>
  );
}

export default Home;

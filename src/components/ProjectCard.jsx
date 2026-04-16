function ProjectCard({ project, isActive, onSelect }) {
  return (
    <article className={`project-card ${isActive ? "is-active" : ""}`}>
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <span>{isActive ? "Focused" : "Project"}</span>
      </div>
      <p>{project.desc}</p>
      <div className="tag-list" aria-label={`${project.title} skills`}>
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button type="button" onClick={onSelect}>
        Highlight this project
      </button>
    </article>
  );
}

export default ProjectCard;

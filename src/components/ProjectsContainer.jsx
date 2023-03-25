import '../styles/components/projectsContainer.sass';

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="projects-card">
        <div className="project-card">
          <div className="project-card--image"></div>
          <div className="project-card--contain">
            <h3>Titulo do Projeto</h3>
            <p>#tecnologia</p>
            <div className="project-card--btn">
              <a href="#" className="btn-card">
                Ver Código
              </a>
              <a href="#" className="btn-card">
                Ver Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card--image"></div>
          <div className="project-card--contain">
            <h3>Titulo do Projeto</h3>
            <p>#tecnologia</p>
            <div className="project-card--btn">
              <a href="#" className="btn-card">
                Ver Código
              </a>
              <a href="#" className="btn-card">
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsContainer;
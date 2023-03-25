import { 
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiBootstrap,
  DiSass,
  DiJqueryLogo,
  DiNodejs,
  DiMysql
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si'

import '../styles/components/technologiesContainer.sass';

const technologies = [
  {id: "html", name: "HTML5", icon: <DiHtml5 />},
  {id: "css", name: "CSS3", icon: <DiCss3 />},
  {id: "js", name: "JavaScript", icon: <DiJsBadge />},
  {id: "ts", name: "TypeScript", icon: <SiTypescript />},
  {id: "react", name: "React", icon: <DiReact />},
  {id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />},
  {id: "sass", name: "Sass", icon: <DiSass />},
  {id: "jquery", name: "jQuery", icon: <DiJqueryLogo />},
  {id: "node", name: "Node.js", icon: <DiNodejs />},
  {id: "mysql", name: "MySQL", icon: <DiMysql />}
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
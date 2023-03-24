import '../styles/components/mainContent.sass'
import AboutContainer from './AboutContainer';
import TechnologiesContainer from './TechnologiesContainer';
import ProjectsContainer from './ProjectsContainer';

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  );
};

export default MainContent;
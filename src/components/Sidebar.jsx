import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/foto-perfil.jpeg';
import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return <aside id="sidebar">
    <div className="img-container">
      <img src={Avatar} alt="Minha imagem de perfil"/>
    </div>
    <p className="title">Software Developer</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">
      Dowload Currículo
    </a>
  </aside>
};

export default Sidebar;
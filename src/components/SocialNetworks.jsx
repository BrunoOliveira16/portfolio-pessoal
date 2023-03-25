import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/components/socialNetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/bruno-oliveira1608/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/BrunoOliveira16" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/bruno.oliveira.16/" }
]

const SocialNetworks = () => {
  return <section id='social-networks'>
    {socialNetworks.map((network) => (
        <a href={network.url} className='social-btn' id={network.name} key={network.name} target="_blank">
            {network.icon}
        </a>
    ))}
  </section>

};

export default SocialNetworks;
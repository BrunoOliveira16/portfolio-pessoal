import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';
import '../styles/components/informationContainer.sass';

const InformationContainer = () => {
  return <section id='information'>
    <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
            <h3>Telefone</h3>
            <p>(21)98672-7034</p>
        </div>
    </div>
    <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
            <h3>E-mail</h3>
            <p>bruno1_oliveira@hotmail.com</p>
        </div>
    </div>
    <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
            <h3>Localização</h3>
            <p>Rio de Janeiro / RJ</p>
        </div>
    </div>
  </section>
};

export default InformationContainer;
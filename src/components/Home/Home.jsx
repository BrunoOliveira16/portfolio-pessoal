import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Olá, <span>Meu nome é</span>
            </p>

            <h1 className="home__title text-cs"><span>BRUNO</span> OLIVEIRA</h1>

            <p className="home__job">
                <span className="text-cs">Eu sou um</span> <b>Desenvolvedor Front-End</b>
            </p>
        </div>
    </section>
  );
};

export default Home;
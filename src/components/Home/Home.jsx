import React from 'react';
import './home.css';
import shapeOne from '../../assets/icon-react.png';
import shapetwo from '../../assets/icon-js.png';
import shapethree from '../../assets/icon-node.png';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs">
                    Olá, <span>Meu nome é</span>
                </p>

                <h1 className="home__title text-cs"><span>BRUNO</span> OLIVEIRA</h1>

                <p className="home__job">
                    <span className="text-cs">Eu sou um</span> <b>Desenvolvedor Front-End</b>
                </p>

                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src="" alt="" className="home__profile" />
                    </div>

                    <p className="home__data home__data-one">
                        <span className="text-lg">
                            12 <b>+</b>
                        </span>

                        <span className="text-sm text-cs">
                            Years of <span>Experience</span>
                        </span>
                    </p>

                    <p className="home__data home__data-two">
                        <span className="text-lg">330</span>

                        <span className="text-sm text-cs">
                            Completed <span>Projects</span>
                        </span>
                    </p>

                    <img src={shapeOne} alt="" className="shape shape__1"/>
                    <img src={shapetwo} alt="" className="shape shape__2"/>
                    <img src={shapethree} alt="" className="shape shape__3"/>
                </div>

                <p className="home__text">
                    Sou natural do Rio de Janeiro, estudante de graduação em Ciência da Computação, um apaixonado por tecnologia e desenvolvimento Web, atualmente venho evoluindo minhas skills no front-end com React e também venho me especializando em Designer UX/UI.
                </p>

                <div className="home__socials">
                    <a href="" className="home__social-link">
                        <FaLinkedin />
                    </a>

                    <a href="" className="home__social-link">
                        <FaGithub />
                    </a>

                    <a href="" className="home__social-link">
                        <FaInstagram />
                    </a>
                </div>

                <div className="home__btns">
                    <a href="" className="btn text-cs">Dowload CV</a>
                    <a href="" className="hero__link text-cs">Minhas Skills</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
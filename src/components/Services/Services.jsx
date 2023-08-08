import React from 'react'
import './service.css';
import { services } from '../../Data';

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">Serviços</h2>
      <p className="section__subtitle">
          Meus <span>Serviços</span>
      </p>

      <div className="services__container container">
        {services.map(({ name, title, description }, index) => {
          return(
            <div className="services__item card card-one" key={index}>
              <span className="services__subtitle text-cs">{name}</span>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>

      {/* <div className="section__deco deco__right"></div> */}
    </section>
  );
};

export default Services;
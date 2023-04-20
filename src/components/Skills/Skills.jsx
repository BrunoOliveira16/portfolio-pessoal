import React from 'react';
import './skills.css';
import { skills } from '../../Data';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Skills Profissionais</h2>
      <p className="section__subtitle">
        Minhas <span>Habilidades</span>
      </p>

      <div className="skills__container container grid">
        {skills.map(({ name, image }, index) => {
          return (
            <div className="skills__item" key={index}>
              <div className="skills__image">
                {image}
              </div>
              <h3 className="skills__name">{name}</h3>
            </div>
          )
        })}
      </div>

      <div className="section__deco deco__left"></div>
    </section>
  );
};

export default Skills;
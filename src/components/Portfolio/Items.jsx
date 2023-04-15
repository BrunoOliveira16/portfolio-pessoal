import React from 'react';
import { AiOutlineFundProjectionScreen, AiOutlineGithub } from 'react-icons/ai';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
          const { id, img, category, title, description } = projectItem;
          
          return(
            <div className="portfolio__items card card-two" key={id}>
              <div className="portfolio__img--wrapper">
                <img src={img} alt={title} className="portfolio__img" />
              </div>

              <span className="portfolio__category text-cs">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>

              <div className="portfolio__link--wrapper">
                <a href="" className="btn-icon btn text-cs">
                  <AiOutlineGithub />
                   Código
                </a>
                <a href="" className="btn-icon btn text-cs">
                  <AiOutlineFundProjectionScreen />
                   Live Demo
                </a>
              </div>
            </div>
          )
      })}
    </>
  );
};

export default Items;
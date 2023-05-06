import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFundProjectionScreen, AiOutlineGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
          const { id, img, category, title, description, codigo, demo } = projectItem;
          
          return(
            <motion.div 
              layout 
              animate={{ opacity: 1, scale: 1 }} 
              initial={{ opacity: 0.8, scale: 0.6 }} 
              exit={{ opacity: 0.8, scale: 0.6 }}
              transition={{duration: 1}}
              className="portfolio__items card card-two" 
              key={id}
            >
              <div className="portfolio__img--wrapper">
                <img src={img} alt={title} className="portfolio__img" />
              </div>

              <span className="portfolio__category text-cs">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>

              <div className="portfolio__link--wrapper">
                <a href={codigo} className="btn-icon btn text-cs" target="_blank">
                  <AiOutlineGithub />
                   Código
                </a>
                <a href={demo} className="btn-icon btn text-cs" target="_blank">
                  <AiOutlineFundProjectionScreen />
                   Live Demo
                </a>
              </div>
            </motion.div>
          )
      })}
    </>
  );
};

export default Items;
import React, { useState } from 'react';
import './resume.css';
import { cv } from '../../Data';
import Card from './Card';

const Resume = () => {

  return (
    <section className="resume section" id="resume">
        <h2 className="section__title text-cs">Resumo</h2>
        <p className="section__subtitle">
            Minha <span>Trajetória</span>
        </p>

        <div className="resume__container container grid">
            <div className="resume__group">
                <h3 className="resume__heading">Educação</h3>

                <div className="resume__items">
                    {cv.map((val, id) => {
                        if(val.category === 'educacao') {
                            return (
                                <Card 
                                    key={id} 
                                    title={val.title} 
                                    subtitle={val.subtitle} 
                                    date={val.date} 
                                    description={val.description} 
                                />
                            );
                        }
                    })}
                </div>
            </div>

            <div className="resume__group">
                <h3 className="resume__heading">Experiência</h3>

                <div className="resume__items">
                    {cv.map((val, id) => {
                        if(val.category === 'experiencia') {
                            return (
                                <Card 
                                    key={id} 
                                    title={val.title} 
                                    subtitle={val.subtitle} 
                                    date={val.date} 
                                    description={val.description} 
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </div>

        {/* <div className="section__deco deco__left"></div> */}
    </section>
  );
};

export default Resume;
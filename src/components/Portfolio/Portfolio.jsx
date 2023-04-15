import React, { useState } from 'react';
import './portfolio.css';

import List from './List';
import Items from './Items';
import { projects } from '../../Data';

const allNavList = projects.map((project) => project.category);

const Portfolio = () => {
    const [projectItems, setMenuItems] = useState(projects);

    return (
        <section className="portfolio section" id="work">
            <h2 className="section__title text-cs">Portfolio</h2>
        <p className="section__subtitle">
            Meus <span>Projetos</span>
        </p>

        <List />

        <div className="portfolio__container container grid">
            <Items projectItems={ projectItems } />
        </div>
        </section>
    );
};

export default Portfolio;
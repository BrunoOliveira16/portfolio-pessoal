/* ======= Icones Tecnologias =======*/
import { SiJavascript, SiTypescript, SiReact, SiAngular, SiBootstrap, SiStyledcomponents, SiNodedotjs, SiJquery } from 'react-icons/si';


/* ======= Imagens Projetos =======*/
import Project1 from './assets/imagem-01.jpg';
import Project2 from './assets/imagem-01.jpg';
import Project3 from './assets/imagem-01.jpg';
import Project4 from './assets/imagem-01.jpg';


export const services = [
    {
        id: 1,
        name: 'Desenvolvimento Web',
        title: 'Front-End',
        description:'Desenvolvimento de sites profissionais, blogs, portfólios, landing pages e e-commerce.'
    },
    {
        id: 2,
        name: 'Designer',
        title: 'UI Design',
        description:'Desenho interfaces que sejam claras, objetivas e que possam ser intuitivas para o usuário. '
    },
]

export const skills = [
    {
        id: 1,
        name: 'JavaScript',
        image: <SiJavascript id='js' />
    },
    {
        id: 2,
        name: 'TypeScript',
        image: <SiTypescript id='ts' />
    },
    {
        id: 3,
        name: 'React',
        image: <SiReact id='react' />
    },
    {
        id: 4,
        name: 'Angular',
        image: <SiAngular id='angular' />
    },
    {
        id: 5,
        name: 'Bootstrap',
        image: <SiBootstrap id='bootstrap' />
    },
    {
        id: 6,
        name: 'styled-components',
        image: <SiStyledcomponents id='styled' />
    },
    {
        id: 7,
        name: 'jQuery',
        image: <SiJquery id='jquery' />
    },
    {
        id: 8,
        name: 'Node js',
        image: <SiNodedotjs id='node' />
    },
]

export const projects = [
    {
        id: 1,
        img: Project1,
        category: 'Desenvolvimento',
        title: 'Projeto 01',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta tempore velit tempora, quo aliquam totam ducimus libero a ea inventore dolores.'
    },
    {
        id: 2,
        img: Project2,
        category: 'Desenvolvimento',
        title: 'Projeto 02',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta tempore velit tempora, quo aliquam totam ducimus libero a ea inventore dolores.'
    },
    {
        id: 3,
        img: Project3,
        category: 'Desenvolvimento',
        title: 'Projeto 03',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta tempore velit tempora, quo aliquam totam ducimus libero a ea inventore dolores.'
    },
    {
        id: 4,
        img: Project4,
        category: 'Desenvolvimento',
        title: 'Projeto 04',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta tempore velit tempora, quo aliquam totam ducimus libero a ea inventore dolores.'
    }
]


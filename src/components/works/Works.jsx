import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './works.scss';
import Dashboard from '../../images/works/analysis.jpg';
import Posters from '../../images/works/posters.jpg';
import Dublin from '../../images/works/startup.jpg';

const works = [
    {
        name: 'hoverstate',
        image: Dashboard,
    },
    {
        name: 'Arc @ Leo Burnett',
        image: Posters,
    },
    {
        name: 'Zappy Inc',
        image: Dublin,
    },
];
export const Works = () => {
    const workListElements = works.map((work, i) => (
        <div className="works__period period" key={i}>
            <div>{work.name}</div>
            <div className="period__image">
                <Parallax speed={-50}>
                    <img src={work.image} alt="" />
                </Parallax>
            </div>
        </div>
    ));
    return <section className="works">{workListElements}</section>;
};

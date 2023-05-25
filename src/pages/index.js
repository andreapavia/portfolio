import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Hero } from '../components/hero/Hero';
import '../styles/global.scss';
import { NumberedSection } from '../components/numberedSection/NumberedSection';
import { AboutMe } from '../components/aboutMe/AboutMe';
import { Works } from '../components/works/Works';

const IndexPage = () => {
    return (
        <ParallaxProvider>
            <main>
                <Hero />
                <NumberedSection number={'01'}>
                    <div className="numbered-section__title">
                        <h2>About me</h2>
                        <h2>
                            Random bits <br /> about my world
                        </h2>
                    </div>
                    <AboutMe />
                </NumberedSection>
                <NumberedSection number={'02'}>
                    <div className="numbered-section__title">
                        <h2>
                            Curriculum <br /> Vitae
                        </h2>
                        <h2>
                            Work
                            <br /> Experience
                        </h2>
                    </div>
                    <Works />
                </NumberedSection>
                <NumberedSection number={'03'}></NumberedSection>
                <NumberedSection number={'04'}></NumberedSection>
            </main>
        </ParallaxProvider>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

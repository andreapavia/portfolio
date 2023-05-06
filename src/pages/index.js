import React from 'react';
import { Hero } from '../components/hero/Hero';
import '../styles/global.scss';
import { NumberedSection } from '../components/numberedSection/NumberedSection';
import { AboutMe } from '../components/aboutMe/AboutMe';

const IndexPage = () => {
    return (
        <main>
            <Hero />
            <NumberedSection number={'01'}>
                <AboutMe />
            </NumberedSection>
            <NumberedSection number={'02'}></NumberedSection>
            <NumberedSection number={'03'}></NumberedSection>
            <NumberedSection number={'04'}></NumberedSection>
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

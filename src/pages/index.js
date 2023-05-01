import React from 'react';
import { Hero } from '../components/hero/Hero';
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <main>
            <Hero />
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

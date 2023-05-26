import React from 'react';
import { Shape } from '../components/animation/shape/Shape';
import '../styles/global.scss';

const ShapePage = () => {
    return (
        <main>
            <Shape />
        </main>
    );
};

export default ShapePage;

export const Head = () => <title>Shape</title>;

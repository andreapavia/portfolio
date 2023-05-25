import React, { useRef } from 'react';
import './numberedSection.scss';

export const NumberedSection = ({ children, number, noSpacing }) => {
    const sectionRef = useRef();

    return (
        <div
            className={`numbered-section ${
                noSpacing && 'numbered-section--no-spacing'
            }`}
            ref={sectionRef}
        >
            <div className="numbered-section__number">
                <span>{number}/</span>
            </div>
            {children}
        </div>
    );
};

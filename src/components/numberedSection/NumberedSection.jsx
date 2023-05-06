import React from 'react';
import './numberedSection.scss';

export const NumberedSection = ({ children, number }) => (
    <div className="numbered-section">
        <div className="numbered-section__number">
            <span>{number}/</span>
        </div>
        {children}
    </div>
);

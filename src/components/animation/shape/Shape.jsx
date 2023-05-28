import React, { useEffect } from 'react';
import { ScrollStage } from './ScrollStage';

import './shape.scss';

export const Shape = () => {
    useEffect(() => {
        new ScrollStage();
    }, []);

    return (
        <section className="shape">
            <div>
                <h1 className="name">
                    <span className="italic">A</span>ndre
                    <span className="inverted">a</span> <br />
                    Pavia
                </h1>
                <h2 className="role">
                    <span>F</span>rontend <br />
                    <span>D</span>eveloper
                </h2>
            </div>
            <div>
                <h3 className="workinp">work in progress</h3>
                <h3 className="comeback">come back soon!</h3>
            </div>
            <div className="content"></div>
        </section>
    );
};

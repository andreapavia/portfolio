import React, { useMemo } from 'react';
import { ScrollStage } from './ScrollStage';

import './shape.scss';

export const Shape = () => {
    const scrollStage = useMemo(() => {
        return new ScrollStage();
    }, []);

    return (
        <section className="shape">
            <div className="content"></div>
            <div className="links">
                <button
                    onClick={() => {
                        scrollStage.moveLeft();
                    }}
                >
                    sinistra
                </button>
                <button
                    onClick={() => {
                        scrollStage.moveBeyond();
                    }}
                >
                    oltre
                </button>
                <button
                    onClick={() => {
                        scrollStage.zoomOut();
                    }}
                >
                    zoom out
                </button>
                <button
                    onClick={() => {
                        scrollStage.zoomIn();
                    }}
                >
                    zoom in
                </button>
            </div>
        </section>
    );
};

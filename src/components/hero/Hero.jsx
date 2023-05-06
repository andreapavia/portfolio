import React from 'react';
import ArrowDown from '../../images/arrow-down.svg';
import './hero.scss';

export const Hero = () => {
    return (
        <section className="intro">
            <div className="intro__fixed-menu intro__fixed-menu--left">
                <div>
                    <span>Andrea Pavia</span>
                </div>
            </div>
            <div className="intro__fixed-menu">
                <div>
                    <button>whoami</button>
                </div>
            </div>
            <sidebar className="intro__sidebar intro-sidebar">
                <ul>
                    <li className="hidden-element" aria-hidden="true">
                        <h4>Andrea Pavia</h4>
                    </li>
                    <li>
                        <h4>
                            Currently Frontend Developer <br /> @ Hoverstate
                        </h4>
                    </li>
                    <li>
                        <h4>
                            Based in Turin <br /> Italy{' '}
                        </h4>
                    </li>
                </ul>
            </sidebar>
            <article className="intro__content content">
                <div className="content__row">
                    <h1>Frontend Developer</h1>
                </div>
                <div className="content__row content__row--two-col">
                    <div className="content__pic-desc">
                        <div className="picture-container"></div>
                        <div className="column-about">
                            <img src={ArrowDown} alt="" aria-hidden="true" />
                            <span>
                                i like slick web ux, two seater cabriolets and
                                sittings on rocks
                            </span>
                            <div className="column-about__spacer"></div>
                        </div>
                    </div>
                    <div className="content__text">
                        <h1 className="content__bottom-title">
                            Pavia <br /> Andrea
                        </h1>
                    </div>
                </div>
            </article>
        </section>
    );
};

import React, { useEffect, useState } from 'react';

import GatsbyLogo from '../../images/Gatsby_Monogram_Black.png';

import './welcome.scss';

const Welcome = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log(counter);
    }, [counter]);

    console.log('provaa');

    return (
        <div className='welcome'>
            <h1>Andrea Francesco Pavia</h1>
            <span>Frontend Developer</span>
            <p>Work in progress... 😉🤡</p>
            <img src={GatsbyLogo} alt='Gatsby.js' aria-hidden='true' />
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
    );
};

export default Welcome;

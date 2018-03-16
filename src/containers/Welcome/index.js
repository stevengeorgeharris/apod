import React from 'react';

import Scramble from '../../components/Scramble';

import './welcome.css';

const Welcome = () => (
    <div className="welcome">
        <span className="welcome__text">
            <Scramble text="Astronomy Picture of the Day" />
        </span>
    </div>
);

export default Welcome;

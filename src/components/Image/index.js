import React from 'react';

const Image = ({ data: { url } }) => {
    return (
        <img src={ url } />
    );
}

export default Image;

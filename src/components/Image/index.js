import React from 'react';

const Image = ({ data: { url } }) => {
    return (
        <img src={ url } alt="" />
    );
}

export default Image;

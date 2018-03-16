import React, { Component } from 'react';

import './cursor.css';

class Cursor extends Component {
    constructor() {
        super();

        this.trackMouse = this.trackMouse.bind(this);
    }

    componentDidMount() {
        this.init();

        document.body.classList.add('no-cursor');
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', e => this.trackMouse(e));
        document.body.classList.remove('no-cursor');
    }

    init() {
        window.addEventListener('mousemove', e => this.trackMouse(e));
    }

    trackMouse(e) {
        requestAnimationFrame(() => {
            const { clientX, clientY } = e;
            const cursor = document.querySelector('.cursor');
            const visualOffset = cursor.offsetWidth / 2;
    
            cursor.style.transform = `translate3d(${clientX - visualOffset}px,${clientY - visualOffset}px, 0)`;
        })
    }

    render() {
        return (
            <div
                className="cursor"
                ref={ el => this.cursor = el }
            />
        );
    }
}

export default Cursor;

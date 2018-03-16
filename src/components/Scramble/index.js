import React, { Component } from 'react'; 

export default class Scramble extends Component {
    chars = '!<>-_\\/[]{}—=+*^?#________';
    state = {
        text: this.props.text,
    }

    render() {
        return (
            <span>{ this.state.text }</span>
        )
    }
}

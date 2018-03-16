import React from 'react';
import axios from 'axios';

import Image from '../components/Image';

import config from '../config';

export default class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    fetchData() {
        axios.get(config.url)
            .then(res => {
                this.setState({ data: res.data })
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    getTemplate() {
        const { data } = this.state;

        switch (data.media_type) {
            case 'image':
                return <Image data={ data } />;
            default:
                break;
        }
    }

    render() {
        const { data } = this.state;

        return data ? (
            <section className="content">
                {/* { this.getTemplate() } */}
            </section>
        ) : null;
    }
}

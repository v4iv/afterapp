import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    static async getInitialProps({req, res, match, history, location, ...ctx}) {
        return {whatever: 'stuff'};
    }

    render() {
        return (
            <div>
                Hello, World!
                <br/>
                <Link to="/stars">Stars</Link>
            </div>
        );
    }
}

export default Home;

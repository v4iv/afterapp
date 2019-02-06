import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import fetch from "node-fetch";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {stars: null, visible: false}
    }

    static async getInitialProps({req, res, match, history, location, ...ctx}) {
        return {whatever: 'stuff'};
    }

    handleClick = async () => {
        const res = await fetch('https://api.github.com/repos/v4iv/gatsby-starter-business')
        const json = await res.json()
        this.setState({stars: json.stargazers_count, visible: true})
    }

    render() {
        return (
            <Fragment>
                Hello, World!
                <br/>
                <Link to="/stars">Stars</Link>
                <br/>
                <br/>
                <button onClick={this.handleClick}>Click Me</button>
                <br/>
                <br/>
                {this.state.visible &&
                <div>Stars: {this.state.stars}</div>
                }
            </Fragment>
        );
    }
}

export default Home;

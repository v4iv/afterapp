import React, {Fragment} from 'react'
import fetch from 'node-fetch'

const StarsPage = ({stars}) => {
    return (
        <Fragment>
            Stars on Vaibhav's Repository:
            <br/>
            {stars}
        </Fragment>
    )
}

StarsPage.getInitialProps = async ({req}) => {
    const res = await fetch('https://api.github.com/repos/v4iv/gatsby-starter-business')
    const json = await res.json()
    return {stars: json.stargazers_count}
}

export default StarsPage

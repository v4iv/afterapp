import React from 'react'
import fetch from 'node-fetch'

const StarsPage = ({stars}) => {
    return (
        <div>
            Stars on Vaibhav's Repository:
            <br/>
            {stars}
        </div>
    )
}

StarsPage.getInitialProps = async ({req}) => {
    const res = await fetch('https://api.github.com/repos/v4iv/gatsby-starter-business')
    const json = await res.json()
    console.log(json)
    return {stars: json.stargazers_count}
}

export default StarsPage

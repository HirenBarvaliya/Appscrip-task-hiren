import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="This is About page." />
            </Helmet>
            <div>About Us</div>
        </>
    )
}

export default About
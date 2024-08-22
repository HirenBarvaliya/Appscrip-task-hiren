import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="This is About page." />
            </Helmet>
            <h1>About Us</h1>
        </>
    )
}

export default About
import React from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
                <meta name="description" content="Page Not Found" />
            </Helmet>
            <h1>Page Not Found</h1>
        </>
    )
}

export default NoPage
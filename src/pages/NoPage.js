import React from 'react'
import { Helmet } from 'react-helmet'

function NoPage() {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
                <meta name="description" content="Page Not Found" />
            </Helmet>
            <div>Page Not Found</div>
        </>
    )
}

export default NoPage
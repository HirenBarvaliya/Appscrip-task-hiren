import React from 'react'

function Layout({ children }) {
    return (
        <div style={layoutStyle} >
            {children}
        </div>
    )
}

export default Layout

const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    marginTop: '100px'
}
import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Name <span style={{fontFamily: 'Permanent Marker, cursive', color: '#FAF33E'}}>Swap</span></h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '11px'
}

export default Header;

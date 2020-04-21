import React from 'react'

const Navbar = ({title}) => {
 
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className="fab fa-github"></i>
                {title}
                </h1>
            </nav>
        )
    
}
Navbar.defaultProps = {
    title: " Github Finder"
}


export default Navbar

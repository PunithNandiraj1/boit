import React, {Component} from 'react'
import { Link } from 'react-router-dom'



import './Navbar.css';



class Navbar extends Component  {
    state = {clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
        
            <nav className="navbar-items">
                <h1 className="navbar-logo">Boit</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link  className="nav-links" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/buy" >Buy $BOIT</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/nft">NFT</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/roadmap">Roadmap</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/tokenomics">Tokenomics</Link>
                    </li>
                    <li>
                        <Link className="nav-links" to="/whitepaper">Whitepaper</Link>
                    </li>
                </ul>
            </nav>
            

        
    )

    }
    
}

export default Navbar

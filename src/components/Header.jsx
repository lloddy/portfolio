import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <nav className="navBar">
                <Link to='/'>
                    <h1>HOME</h1>
                </Link>    
                <Link to='/portfolio'>
                    <h1>PORTFOLIO</h1>
                </Link>
                <Link to='/resume'>    
                    <h1>RESUME</h1>
                </Link>    
                <Link to='/about'>
                    <h1>ABOUT ME</h1>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
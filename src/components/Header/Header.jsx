import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <nav className="nav-bar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
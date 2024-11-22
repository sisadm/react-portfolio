import './Header.css'
import {whiteBtn, blackBtn}  from "../Button/Button.jsx";


const Header = () => {
    return (
        <header className="Header">
            <div>
                {whiteBtn("Copy")}
            </div>
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
import '../../index.css'
import './Header.css'
import {whiteBtn, blackBtn}  from "../Button/Button.jsx";


const Header = () => {
    return (
        <>
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

            <div>
                <div>
                    <img src="" alt=""/>
                </div>
                <div>
                    <h1 className="size-16">Front-End Developer</h1>
                    {blackBtn("Projects", "project-btn")}
                </div>
            </div>
        </>

    )
}

export default Header
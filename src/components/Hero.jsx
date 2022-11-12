import { useState } from "react"
import '../App.css'
import {Link} from 'react-router-dom'

function Hero() {
    const [navItem, setNavItem] = useState(["Home","About","Portofolio","Artikel"])
    const [iconSosmed, setIconSosmed] = useState(["fa-brands fa-github","fa-brands fa-linkedin","fa-brands fa-instagram","fa-brands fa-dribbble"])
    const[heroText, setHeroText] = useState(["Hello!,","I Am", "Naza Zulfiqi","Undergraduate Information Systems Student Learning UI/UX || Web Developer || Desktop Programming"])

    return(
        <>
        <section className="hero">
        <div className="main-width">
            <header>
                <div className="logo">
                    <h1>Nzzlfq</h1>
                </div>

                <nav>
                    <ul className="nav-list">
                        <li><Link to={"/"}>{navItem[0]}</Link></li>
                        <li><Link to={"/about"}>{navItem[1]}</Link></li>
                        <li><Link to={"/portofolio"}>{navItem[2]}</Link></li>
                        <li><Link to={"/artikel"}>{navItem[3]}</Link></li>
                        <li><a href="https://drive.google.com/file/d/1nTHMe5X1o-lxgm9aHjIFdE56IrVaI5XY/view?usp=sharing"
                                className="btn">Download CV</a></li>
                    </ul>
                </nav>
            </header>

            <div className="container-hero">
                <div className="hero-text">
                    <h3>{heroText[0]}</h3>
                    <h1 className="judul">{heroText[1]} <span className="myname">{heroText[2]}</span></h1>
                    <p>{heroText[3]}</p>
                    <div className="social">
                        <a href="https://github.com/nazazulfiqi"><i className={iconSosmed[0]}></i></a>
                        <a href="https://www.linkedin.com/in/nazazulfiqi/"><i className={iconSosmed[1]}></i></a>
                        <a href="https://www.instagram.com/xtoksz/"><i className={iconSosmed[2]}></i></a>
                        <a href="https://dribbble.com/nazazulfiqi"><i className={iconSosmed[3]}></i></a>
                    </div>
                    <a href="#about"><button type="button">More About Me</button></a>
                </div>
                <div className="bottom">
                    <p>c 2022 Naza Zulfiqi - All Rights Reserved. </p>
                </div>
            </div>
        </div>  
    </section>
        </>
    )
}

export default Hero
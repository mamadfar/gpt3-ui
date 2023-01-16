import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import "./navbar.scss";
import Logo from "../../assets/img/logo.svg";
import {useState} from "react";

const Menu = () => (
    <>
        <p>
            <a href="#home">Home</a>
        </p>
        <p>
            <a href="#wgpt3">What is GP3?</a>
        </p>
        <p>
            <a href="#possibility">Open AI</a>
        </p>
        <p>
            <a href="#features">Case Studies</a>
        </p>
        <p>
            <a href="#blog">Library</a>
        </p>
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img loading="lazy" src={Logo} alt="logo"/>
                </div>
                <nav className="gpt3__navbar-links_container">
                    <Menu/>
                </nav>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ? (
                    <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                ) : (
                    <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
                )}
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu/>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Navbar;

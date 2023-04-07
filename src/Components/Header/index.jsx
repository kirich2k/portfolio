import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
    let url = useLocation();
    return (
        <article className="header">
            <header className="header__container">
                <Link to={"/"}>
                    <h2 className="header__logo">
                        <span>Freelancer</span> portfolio
                    </h2>
                </Link>
                <nav className="header__nav">
                    <Link
                        to={"/"}
                        className={
                            "header__link" +
                            (url.pathname === "/" ? " -active" : "")
                        }
                    >
                        Main
                    </Link>
                    <Link
                        to={"/skills"}
                        className={
                            "header__link" +
                            (url.pathname === "/skills" ? " -active" : "")
                        }
                    >
                        Skills
                    </Link>
                    <Link
                        to={"/contacts"}
                        className={
                            "header__link" +
                            (url.pathname === "/contacts" ? " -active" : "")
                        }
                    >
                        Contacts
                    </Link>
                </nav>
            </header>
        </article>
    );
}

export default Header;

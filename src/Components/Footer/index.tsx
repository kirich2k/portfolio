import './Footer.css';
import vk from '../../Img/Footer/vk.svg';
import instagram from "../../Img/Footer/instagram.svg";
import twitter from "../../Img/Footer/twitter.svg";
import gitHub from "../../Img/Footer/gitHub.svg";
import linkedIn from "../../Img/Footer/linkedIn.svg";

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__nav">
                <a
                    href="https://vk.com/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={vk}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
                <a
                    href="https://instagram.com/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={instagram}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
                <a
                    href="https://twitter.com/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={twitter}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
                <a
                    href="https://github.com/"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={gitHub}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
                <a
                    href="https://linkedin.com"
                    className="footer__link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={linkedIn}
                        alt="icon"
                        className="footer__icons"
                        draggable={false}
                    />
                </a>
            </section>
            <section className="footer__footnote">
                © 2022 frontend-dev.com
            </section>
        </footer>
    );
}

export default Footer;

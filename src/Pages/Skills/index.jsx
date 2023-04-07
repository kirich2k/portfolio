import "./Skills.css";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

function Skills() {
    return (
        <>
            <Header />
            <main className="main" id="skills">
                <article className="main__container skills">
                    <span className="skills__title">Skills</span>
                    <article className="skills__front front">
                        <span className="front__title">Frontend</span>
                        <p className="front__description">
                            JavaScript, TypeScript, ReactJS, Angular, Redux,
                            HTML,CSS, NPM, BootStrap, MaterialUI, Yarn,
                            TailwindCSS, StyledComponents
                        </p>
                    </article>
                    <article className="skills__back back">
                        <span className="back__title">Backend</span>
                        <p className="back__description">
                            NodeJS, MySQL, MongoDB, PHP, Laravel
                        </p>
                    </article>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Skills;

import React from "react";
import Header from "../../Components/Header";
import "./Main.css";
import Projects from "../../Arrays/Projects";
/* import oneImg from "../../Img/Main/one.jpg";
import twoImg from "../../Img/Main/two.jpg";
import threeImg from "../../Img/Main/three.jpg";
import fourImg from "../../Img/Main/four.jpg";
import fiveImg from "../../Img/Main/five.jpg";
import sixImg from "../../Img/Main/six.jpg";*/
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <Header />
            <main className="main" id="main">
                <article className="main__one one-section">
                    <section className="one-section__container">
                        <span className="one-section__title">
                            Hi, my name is <span>Yuri</span>
                        </span>
                        <span className="one-section__subtitle">
                            a frontend developer
                        </span>
                        <p className="one-section__description">
                            with passion for learning and creating.
                        </p>
                    </section>
                </article>
                <article className="main__two two-section">
                    <section className="two-section__container">
                        <span className="two-section__title">Project</span>
                        <section className="two-section__card card">
                            {Projects.map((i) => (
                                <Link
                                    to={'/project/' + i.id}
                                    className="card__element"
                                    key={String(i.id)}
                                >
                                    <img
                                        src={i.img}
                                        alt="img"
                                        className="card__img"
                                        draggable={false}
                                    />
                                    <span className="card__title">
                                        {i.name}
                                    </span>
                                </Link>
                            ))}
                        </section>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Main;

/* <div className="card__element">
                                <img
                                    src={oneImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">
                                    Gaming streaming portal
                                </span>
                            </div>
                            <div className="card__element">
                                <img
                                    src={twoImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">
                                    Video service
                                </span>
                            </div>
                            <div className="card__element">
                                <img
                                    src={threeImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">
                                    Video portal
                                </span>
                            </div>
                            <div className="card__element">
                                <img
                                    src={fourImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">Dating app</span>
                            </div>
                            <div className="card__element">
                                <img
                                    src={fiveImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">Landing</span>
                            </div>
                            <div className="card__element">
                                <img
                                    src={sixImg}
                                    alt="img"
                                    className="card__img"
                                    draggable={false}
                                />
                                <span className="card__title">
                                    Gaming community
                                </span>
                            </div>*/

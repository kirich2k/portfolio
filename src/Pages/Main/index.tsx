import React from "react";
import Header from "../../Components/Header";
import "./Main.css";
import Projects from "../../Arrays/Projects";
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

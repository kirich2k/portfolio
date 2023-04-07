import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./Contacts.css";

function Contacts() {
    return (
        <>
            <Header />
            <main className="main" id="contacts">
                <article className="main__container contacts">
                    <span className="contacts__title">Contacts</span>
                    <article className="contacts__front location">
                        <span className="location__title">Location</span>
                        <p className="location__description">Moscow, Russia</p>
                    </article>
                    <article className="contacts__back number">
                        <span className="number__title">
                            Telegram / WhatsApp
                        </span>
                        <p className="number__description">
                            +7 (905) 123-45-67
                        </p>
                    </article>
                    <article className="contacts__back mail">
                        <span className="mail__title">Email</span>
                        <a
                            href="mailto:webdev@protonmail.com"
                            className="mail__description"
                        >
                            webdev@protonmail.com
                        </a>
                    </article>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;

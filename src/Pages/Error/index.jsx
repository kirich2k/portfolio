import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import errorImg from "../../Img/Error/error.svg";
import repairImg from "../../Img/Error/repair.svg";
import "./Error.css";

function Error() {
    return (
        <>
            <Header />
            <main className="main" id="error">
                <article className="main__error error">
                    <span className="error__title">
                        Упс... Произошла ошибка
                    </span>
                    <div className="error__img">
                    <img src={errorImg} alt="error" />
                    <img src={repairImg} alt="repair" /></div>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Error;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Projects from "../../Arrays/Projects/index";
import "./Project.css";
import gitImg from "../../Img/Project/gitHub.svg";
let el: elType;
let id: number;
type elType = {
    id: number;
    img: string;
    name: string;
};
function Project() {
    const [load, setLoad] = useState(false);
    let i = useParams();
    useEffect(() => {
        const element = () => {
            el = Projects[Number(id) - 1];
            setLoad(true);
        };
        Projects[Number(id) - 1] ? element() : console.log("error");
    }, []);
    i.id !== undefined ? (id = Number(i.id)) : console.log("error");
    return load ? (
        <>
            <Header />
            <main className="main" id="project">
                <article className="main__container project">
                    <span className="project__title">Video service</span>
                    <section className="project__img">
                        <img src={el.img} alt="img" draggable={false} />
                    </section>
                    <section className="project__skills">
                        <span className="project__description">
                            Skills: React, Node.js, MongoDB
                        </span>
                        <button className="project__btn">
                            <img src={gitImg} alt="img" draggable={false}/> 
                            GitHub repo
                        </button>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    ) : (
        <h1
            style={{
                width: "100%",
                textAlign: "center",
                marginTop: "60px",
                fontFamily: "DMSans-Bold",
                fontSize: "40px",
            }}
        >
            Загрузка...
        </h1>
    );
}

export default Project;

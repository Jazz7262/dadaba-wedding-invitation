import React from "react";
import "../styles/Couple.css";

function Couple() {
    return (
        <section id="couple">
            <div className="couple-wrapper">
                <h1 className="title-quote">
                    Happy Couple Going To Be Married
                </h1>

                <div className="row">
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="carouselIndicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselIndicators"
                                    data-slide-to="1"
                                ></li>
                                
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/groom1.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/groom2.jpeg"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselIndicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower groom-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info groom-info">
                            <h3>
                                Khanbu Mehboob Basha Urf Dadaba 
                                {/* <sub>Silver Smith,</sub> */}
                            </h3>
                            {/* <p className="mt-2 mt-lg-3">
                                Professsion: <strong>I/C Head Master</strong>
                            </p> */}
                            <p className="mt-2 mt-lg-3">
                                Grand S/O Janab{" "}
                                <strong>
                                    Khanbu Mehboob Sahab(Aalim -e- Deen)(Late)
                                </strong>
                            </p>
                            {/* <p className="mt-1 mt-lg-2">
                                Grand S/O Janab{" "}
                                <strong>M. Mustafa Sahab(Late),</strong>{" "}
                                Sievella.
                            </p> */}
                            {/* <p className="mt-1 mt-lg-2">
                                S/O <strong>R Muhammad Haneef(late).</strong>
                            </p> */}
                        </div>
                    </div>
                    <div
                        className="col-lg-2"
                        data-aos="zoom-out "
                        data-aos-delay="300"
                    >
                        <img
                            className=" heart-mid"
                            src="../assets/images/heart.png"
                            alt="heart_img"
                        />
                    </div>
                    <div className="col-lg-5" data-aos="fade-up">
                        <div
                            id="bride-carousel-indicators"
                            className="carousel slide"
                            data-interval="2000"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#bride-carousel-indicators"
                                    data-slide-to="1"
                                ></li>
                               
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/bride.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="img-wrapper">
                                        <img
                                            className="couple-img"
                                            src="../assets/images/bride.png"
                                            alt="couple_img"
                                        />
                                    </div>
                                </div>
                                
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#bride-carousel-indicators"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                            <img
                                className="flower bride-flower"
                                src="../assets/images/golden-rose.png"
                                alt="flower"
                            />
                        </div>
                        <div className="info bride-info">
                            <h3>
                                Noor -e- A'ayin
                                {/* <sub></sub> */}
                            </h3>
                            {/* <p className="mt-2 mt-lg-3">
                                Professsion: <strong>SG Teacher, Adoni.</strong>
                            </p> */}
                            <p className="mt-2 mt-lg-3">
                                D/O Janab{" "}
                                <strong>Moulana Mohammed Ali Sahab,</strong>
                            </p>
                            {/* <p className="mt-1 mt-lg-2">
                                D/O Janab <strong>S. Abdul Malik Sahab,</strong>
                            </p>
                            <p className="mt-1 mt-lg-2">
                                H.No.: 17-110/8, Kishan Singh Street,
                            </p> */}
                            <p className="mt-1 mt-lg-2">Adoni.</p>
                            {/* <p className="mt-1 mt-lg-2">
                                D/O <strong>Shaikh Nazeer Ahmed.</strong>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Couple;

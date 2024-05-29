"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const SplideComponent = () => {
    return (
        <section className="slider">
            <div className="kapsayici">
                <h2>Splide Slider</h2>
                <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        perMove: 1,
                        autoplay: true,
                        pauseOnHover: true,
                        resetProgress: false,
                        gap: 30,
                    }}
                >
                    <SplideSlide>
                        <Image
                            src="/ornek-1.jpg"
                            alt="Image 1"
                            width={500}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            src="/ornek-2.jpg"
                            alt="Image 2"
                            width={500}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            src="/ornek-3.jpg"
                            alt="Image 3"
                            width={500}
                            height={300}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            src="/ornek-4.jpg"
                            alt="Image 4"
                            width={500}
                            height={300}
                        />
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
};

export default SplideComponent;

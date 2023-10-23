import React, { useEffect } from "react";
import img1 from "src/assets/images/img1.jpeg";
import img2 from "src/assets/images/img2.jpeg";
import img3 from "src/assets/images/login-bg.png";
import img4 from "src/assets/images/img4.jpg";
import img5 from "src/assets/images/img5.jpg";
import "src/share/slider/Slider.scss";

interface SliderProps {}

const Slider: React.FC<SliderProps> = (props) => {
    useEffect(() => {
        const slider: HTMLDivElement | null = document.querySelector(".slider");
        const items = document.querySelectorAll(".slider img");
        const next = document.getElementById("next") as HTMLButtonElement | null; 
        const prev = document.getElementById("prev") as HTMLButtonElement | null; 
        const dots = document.querySelectorAll(".dots li");
        

        if (!slider || !next || !prev) {
            return;
        }

        const lengthItems = items.length - 1;
        let active = 0;

        next.onclick = () => {
            active = active + 1 <= lengthItems ? active + 1 : 0;
            reloadSlider();
        };

        prev.onclick = () => {
            active = active - 1 >= 0 ? active - 1 : lengthItems;
            reloadSlider();
        };

        let refreshInterval = setInterval(() => {
            next.click();
        }, 1000*60*1);

        const reloadSlider = () => {
            const currentImage = items[active] as HTMLImageElement;
            slider.style.left = -currentImage.offsetLeft + "px";
            const lastActiveDot = document.querySelector(" .dots li.active");
            if (lastActiveDot) {
                lastActiveDot.classList.remove("active");
            }
            dots[active].classList.add("active");

            clearInterval(refreshInterval);
            refreshInterval = setInterval(() => {
                next!.click();
            }, 3000);
        };

        dots.forEach((li, key) => {
            li.addEventListener("click", () => {
                active = key;
                reloadSlider();
            });
        });

        window.onresize = function (event) {
            reloadSlider();
        };
    }, []);
    return (
        <React.Fragment>
            <div className="slider-container">
                <div className="slider">
                    <div id="slides-1" className="slides">
                        <img src={img1} alt="Images" className="sliderImg-1" />
                    </div>
                    <div id="slides-2" className="slides">
                        <img src={img2} alt="Images" className="sliderImg-2" />
                    </div>
                    <div id="slides-3" className="slides">
                        <img src={img3} alt="Images" className="sliderImg-3" />
                    </div>
                    <div id="slides-4" className="slides">
                        <img src={img4} alt="Images" className="sliderImg-4" />
                    </div>
                    <div id="slides-5" className="slides">
                        <img src={img5} alt="Images" className="sliderImg-5" />
                    </div>
                </div>
                <div className="buttons">
                    <button className="buttons-prev" id="prev">
                        {"<"}
                    </button>
                    <button className="buttons-next" id="next">
                        {">"}
                    </button>
                </div>
                <ul className="dots">
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default Slider;

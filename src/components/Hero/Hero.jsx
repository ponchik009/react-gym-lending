import React from "react";
import Header from "../Header/Header";

import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* реклама */}
        <div className="the-best-ad">
          <span>the best fitness club in the town</span>
        </div>

        {/* заголовок */}
        <div className="hero-text">
          <div>
            <span class="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* фигуры */}
        <div className="figures">
          <div>
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* кнопки */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="Пульс" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* картинки человека */}
        <img src={hero_image_back} alt="" className="hero-image-back" />
        <img src={hero_image} alt="Спортсмен" className="hero-image" />

        {/* калории */}
        <div className="calories">
          <img src={Calories} alt="График" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
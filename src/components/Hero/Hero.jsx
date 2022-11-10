import React from "react";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  const transitionAdd = { type: "tween", duration: 3 };
  const transitionHeart = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* реклама */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={transitionAdd}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* заголовок */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
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
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              + 978
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              + 50
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
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
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transitionHeart}
          className="heart-rate"
        >
          <img src={Heart} alt="Пульс" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* картинки человека */}
        <motion.img
          src={hero_image_back}
          alt=""
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transitionHeart}
        />
        <img src={hero_image} alt="Спортсмен" className="hero-image" />

        {/* калории */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transitionHeart}
          className="calories"
        >
          <img src={Calories} alt="График" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

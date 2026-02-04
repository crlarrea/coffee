"use client";
import { data } from "@/app/data/data";
import Slide from "./slide";
import styles from "@/app/page.module.scss";
import { useState } from "react";
import { oswald } from "../fonts/fonts";
export default function Gallery() {
  const [styleState, setStyleState] = useState({
    backgroundColourStart: "transparent",
    backgroundColourEnd: "transparent",
    textColour: "black",
    description: "",
    imgURL: "/strawberry.png",
  });

  const updateStyle = (
    description: string,
    backgroundColourStart: string,
    backgroundColourEnd: string,
    textColour: string,
    imgURL: string,
  ) => {
    setStyleState({
      backgroundColourStart,
      backgroundColourEnd,
      textColour,
      imgURL,
      description,
    });
  };

  return (
    <section
      className={`${styles.gallery} ${styles.bkgActive}`}
      style={{
        color: styleState.backgroundColourStart,
        background: `radial-gradient(circle at 50% 50%,${styleState.backgroundColourStart},${styleState.backgroundColourEnd})`,
      }}
    >
      <p className={`${styles.info} ${oswald.className}`}>new flavours!</p>
      {data.map((entry, index) => {
        return (
          <Slide
            key={index}
            description={entry.description}
            backgroundColourStart={entry.backgroundColourStart}
            backgroundColourEnd={entry.backgroundColourEnd}
            backgroundImgURL={entry.backgroundImgURL}
            textColour={entry.textColour}
            imgURL={entry.imgURL}
            updateStyle={updateStyle}
          />
        );
      })}
      <div className={styles.description}>
        <p style={{ color: styleState.textColour }}>{styleState.description}</p>
      </div>

      <div className={styles.bckImg}></div>
    </section>
  );
}

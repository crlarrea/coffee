"use client";
import styles from "@/app/page.module.scss";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { ItemProps } from "../types/types";
import Image from "next/image";
export default function Slide({
  description,
  backgroundColourStart,
  backgroundColourEnd,
  imgURL,
  backgroundImgURL,
  textColour,
  updateStyle,
}: ItemProps) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.9,
    root: null,
    rootMargin: "0px",
  });
  useEffect(() => {
    if (entry?.isIntersecting) {
      updateStyle(
        description,
        backgroundColourStart,
        backgroundColourEnd,
        textColour,
        imgURL,
      );
    }
  }, [entry?.isIntersecting]);

  return (
    <article className={styles.slide} ref={ref}>
      <div
        className={`${styles.productImg} `}
      >
        <Image
          src={imgURL}
          fill
          sizes="(max-width:1024px) 300px"
          alt={description}
          className={`${entry?.isIntersecting ? styles.imgAnimateIn : styles.imgAnimateOut}`}
        />
      </div>
    </article>
  );
}

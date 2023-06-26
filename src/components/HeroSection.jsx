import styles from "./Hero.module.css";
import heroes from "../data/heroes.json";
import { HeroItem } from "./HeroItem";

export const HeroSection = () => {
  return (
    <div className={styles["hero-grid"]}>
      {heroes.map((hero, index) => {
        return <HeroItem key={index} {...hero} />;
      })}
    </div>
  );
};

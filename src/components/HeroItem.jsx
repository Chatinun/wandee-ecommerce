import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

export const HeroItem = ({ name, image }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles["hero-item"]}
      onClick={() => navigate("/categories", { state: name })}
    >
      <img src={image} />
      <h2>{name}</h2>
    </div>
  );
};

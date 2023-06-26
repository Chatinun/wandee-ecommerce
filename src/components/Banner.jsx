import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";

export const Banner = ({ header, paragraph, button, image, reverse }) => {
  const navigate = useNavigate();

  return (
    <div className={`${styles["banner"]} ${reverse ? styles["reverse"] : ""}`}>
      <div className={styles["info"]}>
        <div>
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <button className="red" onClick={() => navigate("./categories")}>
            {button}
          </button>
        </div>
      </div>
      <div className={styles["image"]}>
        <img src={image} />
      </div>
    </div>
  );
};

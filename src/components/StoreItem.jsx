import styles from "./StoreItem.module.css";
import { Link } from "react-router-dom";

export const StoreItem = ({ id, imgs, name, price }) => {
  return (
    <Link to={`/categories/product/${id}`} style={{ textDecoration: "none" }}>
      <div className={styles["product-card"]}>
        <div className={styles["product-img"]}>
          <img src={imgs[0]} loading="lazy" />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{price} THB</p>
        </div>
      </div>
    </Link>
  );
};

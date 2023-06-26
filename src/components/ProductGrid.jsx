import styles from "./Product.module.css";
import { StoreItem } from "./StoreItem";

export const ProductGrid = ({ items }) => {
  return (
    <div className={styles["product-grid"]}>
      {items.slice(0).map((item) => {
        return <StoreItem key={item.id} {...item} />;
      })}
    </div>
  );
};

import { useShoppingCart } from "../../Context/ShoppingCartContext";
import styles from "./ShoppingCart.module.css";
import products from "../../data/products.json";
import { formatCurrency } from "../../util/formatCurrency";

export const CartItem = ({ id, quantity }) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const product = products.find((product) => product.id === id);
  if (product == null) return null;

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["img-wrapper"]}>
        <img src={product.imgs[0]} />
      </div>
      <div className={styles["details"]}>
        <button
          id={styles.remove}
          className="outline"
          onClick={() => removeFromCart(id)}
        >
          X
        </button>
        <div>
          <h3 className={styles["product-name"]}>{product.name}</h3>
          <p>
            {quantity} x {formatCurrency(product.price)}
          </p>
        </div>
        <span className={styles.counter}>
          <button className="outline" onClick={() => decreaseCartQuantity(id)}>
            -
          </button>
          <span>{quantity}</span>
          <button className="outline" onClick={() => increaseCartQuantity(id)}>
            +
          </button>
        </span>
      </div>
    </div>
  );
};

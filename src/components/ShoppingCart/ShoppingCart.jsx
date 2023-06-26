import styles from "./ShoppingCart.module.css";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../../util/formatCurrency";
import products from "../../data/products.json";

export const ShoppingCart = () => {
  const { cartItems, closeCart, isOpen, cartQuantity } = useShoppingCart();

  return (
    <div>
      <div
        className={`${styles["disable-background"]} ${
          isOpen ? "" : styles["disabled"]
        }`}
      ></div>
      <div
        className={`${styles["off-canvas"]} ${
          isOpen ? "" : styles["menu-disabled"]
        }`}
      >
        <div className={styles["upper-section"]}>
          <div className={styles["header"]}>
            <p>Your Shopping Cart ({cartQuantity})</p>
            <button onClick={closeCart}>X</button>
          </div>
          <div className={styles["cart-item-wrapper"]}>
            {cartItems.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className={styles["bottom-section"]}>
          <div className={styles["subtotal"]}>
            <p>
              Subtotal :{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = products.find((item) => item.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </p>
          </div>
          <button className={`black ${styles["checkout"]}`}>Check out</button>
        </div>
      </div>
    </div>
  );
};

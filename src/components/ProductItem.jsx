import styles from "./Product.module.css";
import products from "../data/products.json";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { formatCurrency } from "../util/formatCurrency";

export const ProductItem = ({ id }) => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [imgIndex, setImgIndex] = useState(0);

  const { setCartQuantity, openCart } = useShoppingCart();

  const product = products.find((product) => product.id === id);

  useEffect(() => {
    setItemQuantity(1);
    console.log("Hello");
  }, [product]);

  return (
    <div>
      <h1>{product.name}</h1>
      <div className={styles["wrapper"]}>
        <div className={styles["product-images-section"]}>
          <div className={styles["product-images-xl"]}>
            <img src={product.imgs[imgIndex]} />
          </div>
          <div className={styles["product-images-selector"]}>
            {product.imgs.map((img, index) => {
              return (
                <div
                  className={`${styles["product-images-sm"]} ${
                    imgIndex === index ? "" : styles["not-selected"]
                  }`}
                >
                  <img onClick={() => setImgIndex(index)} src={img} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles["product-context-section"]}>
          <p>{product.description}</p>
          <div className={styles["item-quantity"]}>
            <h3>Quantity</h3>
            <div className={styles["counter"]}>
              <button
                onClick={() => {
                  if (itemQuantity > 1) setItemQuantity((prev) => prev - 1);
                }}
              >
                -
              </button>
              <div>{itemQuantity}</div>
              <button onClick={() => setItemQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            {formatCurrency(itemQuantity * product.price)}
          </div>

          <div className={styles["buy-button"]}>
            <button
              className="outline"
              onClick={() => setCartQuantity(product.id, itemQuantity)}
            >
              Add to cart
            </button>
            <button
              className="red"
              onClick={() => {
                setCartQuantity(product.id, itemQuantity);
                openCart();
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

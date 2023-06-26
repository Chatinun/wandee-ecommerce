import { useShoppingCart } from "../../Context/ShoppingCartContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) setIsMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <nav>
          <div className={styles.navigation}>
            <div className={styles.logo}>
              <Link to="/">
                <img src="/images/logo_website.png" />
              </Link>
            </div>
            <div className={styles.links}>
              <Link to="/categories">Categories</Link>
            </div>
            <div className={styles.hamburger}>
              <button onClick={toggleMenu}>
                <FaBars />
              </button>
            </div>
            <div
              className={`${styles["off-canvas-menu"]} ${
                isMenuOpen ? styles["menu-show"] : styles["menu-hide"]
              }`}
            >
              <button
                className={styles["menu-close-button"]}
                onClick={toggleMenu}
              >
                X
              </button>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/categories" onClick={toggleMenu}>
                Categories
              </Link>
            </div>
          </div>
          <div className={styles["shopping-cart"]}>
            <button onClick={openCart}>
              <FaShoppingCart className={styles["shoppingcart-icon"]} />
              {cartQuantity > 0 && (
                <div className={styles["shoppingcart-circle"]}>
                  {cartQuantity}
                </div>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

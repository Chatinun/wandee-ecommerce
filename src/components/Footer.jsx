import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/images/logo_website.png" alt="" />
          </div>
          <div className={styles.navigator}>
            <h4>Pages</h4>
            <div>
              <Link to="/">Home</Link>
              <Link to="/categories">Category</Link>
            </div>
          </div>
          <div className={styles.subscribe}>
            <h4>Subcribe to Wandee Store</h4>
            <div>
              <input type="text" />
              <button className="red">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

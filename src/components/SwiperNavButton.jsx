import { useSwiper } from "swiper/react";
import styles from "./ProductCarousel.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const SwiperNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className={styles["carousel-nav"]}>
      <button onClick={() => swiper.slidePrev()}>
        <FaArrowLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
};

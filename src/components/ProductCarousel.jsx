import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/bundle";
import styles from "./ProductCarousel.module.css";
import products from "../data/products.json";
import { StoreItem } from "./StoreItem";
import { SwiperNavButton } from "./SwiperNavButton";

export const ProductCarousel = () => {
  const swiper = useSwiper();

  return (
    <div>
      <Swiper
        className={styles["swiper-container"]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <div className={styles["header"]} slot="container-start">
          <h2>Trending Now</h2>
          <SwiperNavButton />
        </div>

        <div>
          {products
            .filter((item) => item.trending === "true")
            .map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <StoreItem {...item} />
                </SwiperSlide>
              );
            })}
        </div>
      </Swiper>
    </div>
  );
};

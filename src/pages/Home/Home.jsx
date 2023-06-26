import styles from "./Home.module.css";
import products from "../../data/products.json";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { StoreItem } from "../../components/StoreItem";
import { Banner } from "../../components/Banner";
import banners from "../../data/banners.json";
import { HeroSection } from "../../components/HeroSection";
import { ProductCarousel } from "../../components/ProductCarousel";
import { ProductGrid } from "../../components/ProductGrid";

export const Home = () => {
  const bannersList = banners.map((banner) => banner);

  return (
    <div>
      <div className="container">
        <HeroSection />

        <h1>Our Products</h1>
        <ProductGrid items={products} />
        <Banner {...bannersList[0]} />
        <ProductCarousel />

        <Banner reverse={true} {...bannersList[1]} />

        <ShoppingCart />
      </div>
    </div>
  );
};

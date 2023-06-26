import { useParams } from "react-router-dom";

import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { ProductItem } from "../../components/ProductItem";
import { ProductCarousel } from "../../components/ProductCarousel";

export const Product = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <ProductItem id={Number(id)} />
      <ProductCarousel />
      <ShoppingCart />
    </div>
  );
};

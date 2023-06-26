import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import products from "../../data/products.json";
import { ShoppingCart } from "../../components/ShoppingCart/ShoppingCart";
import { StoreItem } from "../../components/StoreItem";
import { useLocation } from "react-router-dom";
import { ProductGrid } from "../../components/ProductGrid";

export const Categories = () => {
  const { state } = useLocation();
  const [items, setItems] = useState(products);
  const [category, setCategory] = useState(state ? state : "All");
  const categoryLists = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filterCategories = (category) => {
    setCategory(category);

    if (category === "All") {
      setItems(products);
      return;
    }

    const updatedItems = products.filter((product) => {
      return product.category === category;
    });

    setItems(updatedItems);
  };

  useEffect(() => {
    filterCategories(state ? state : "All");
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles["header"]}>
          <h1>{category}</h1>
        </div>
        <div className={styles["category-filter"]}>
          {categoryLists.map((category) => {
            return (
              <button
                className="outline"
                onClick={() => filterCategories(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        <ProductGrid items={items} />
        <ShoppingCart />
      </div>
    </>
  );
};

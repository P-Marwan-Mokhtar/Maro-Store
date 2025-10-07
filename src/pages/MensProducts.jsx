import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import LoadingProducts from "../components/LoadingProducts";

const MensProducts = () => {
  const categories = [
    "mens-shirts",
    "mens-watches",
    "mens-shoes",
    "sunglasses",
    "fragrances",
  ];
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  });
  return isLoading ? (
    <div className="pt-[220px] md:pt-[180px]">
      {categories.map((category) => (
        <LoadingProducts key={category} />
      ))}
    </div>
  ) : (
    <div className="pt-[220px] pt-[180px]">
      {categories.map((category) => (
        <Products key={category} data={products[category]} title={category} />
      ))}
    </div>
  );
};

export default MensProducts;

import React, { useEffect, useState } from "react";

import Products from "../components/Products/Products";
import { FaArrowUp } from "react-icons/fa";
import img1 from "/src/assets/photo.jpg";
import LoadingProducts from "../components/LoadingProducts";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const categories = [
    "Mens-watches",
    "Mens-shirts",
    "Mens-shoes",
    "Sunglasses",
    "Womens-bags",
    "Womens-Dresses",
  ];
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  const BackToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <PageTransition>
      <div className="container pt-[220px]  2xl:h-[100vh] pb-[40px] md:pt-[170px]">
        <img src={img1} alt="" className="h-full  w-full" />
      </div>
      {isLoading
        ? categories.map((category) => <LoadingProducts key={category} />)
        : categories.map((category) => (
            <Products
              key={category}
              data={products[category]}
              title={category}
            />
          ))}
      <button
        onClick={() => BackToTop()}
        className={`fixed bottom-5 w-[50px] right-5 z-10 items-center justify-center text-[20px] h-[50px] rounded-full bg-gray-700 text-white hidden ${
          isScroll ? "!flex" : ""
        }
        `}
      >
        <FaArrowUp />
      </button>
    </PageTransition>
  );
};

export default Home;

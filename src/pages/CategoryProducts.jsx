import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products/Products";
import Product from "../components/Products/Product";
import LoadingProducts from "../components/LoadingProducts";
import PageTransition from "../components/PageTransition";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(category);
  useEffect(() => {
    const fetchedCategory = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedCategory();
  }, [category]);
  console.log(products);
  return (
    <PageTransition>
      <div className="container h-full min-h-[100vh] pt-[220px] md:pt-[180px]">
        {isLoading ? (
          <LoadingProducts />
        ) : (
          <>
            <div className="border-b-2  text-gray-900 mb-6 flex flex-col gap-2">
              <h1 className="text-3xl text-gray-900 font-semibold">
                {category} : {products.length}
              </h1>
              <p className="mb-2 text-gray-500 md:text-xl font-semibold">
                Add bestselling products to weekly line up
              </p>
            </div>
            <div className="flex justify-center md:justify-start pb-[80px] flex-wrap h-full gap-6">
              {products.map((product) => (
                <div className="w-[280px] pb-[15px] last:pb-0">
                  <Product data={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </PageTransition>
  );
};

export default CategoryProducts;

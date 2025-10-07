import React, { useEffect, useRef, useState } from "react";
import { data, useParams } from "react-router-dom";
import ProductDetailsText from "../components/ProductDetailsText";
import Products from "../components/Products/Products";
import LoadingProducts from "../components/LoadingProducts";
import LoadingProductDetails from "../components/LoadingProductDetails";
import PageTransition from "../components/PageTransition";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const bigImg = useRef();

  useEffect(() => {
    const fetchedProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchedProduct();
  }, [id]);
  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setCategory(data.products))
      .catch((error) => console.error(error));
  });

  return isLoading ? (
    <div className="h-full flex flex-col gap-5  pb-[100px]">
      <LoadingProductDetails />
      <LoadingProducts />
    </div>
  ) : (
    <PageTransition>
      <div className="container ">
        <div className="flex  flex-col mb-[100px]">
          <div className="grid lg:grid-cols-2 pt-[180px]">
            <div className="flex flex-col items-center justify-center">
              <img
                ref={bigImg}
                src={product.images[0]}
                className="w-[500px]"
                alt=""
              />{" "}
              <div className="flex w-fit max-w-full flex-wrap  pr-3">
                {product.images.map((img) => (
                  <img
                    onClick={() => {
                      bigImg.current.src = img;
                    }}
                    src={img}
                    alt=""
                    className=" w-[30%] cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <ProductDetailsText data={product} />
          </div>
        </div>

        <Products title={product.category} data={category} />
      </div>
    </PageTransition>
  );
};

export default ProductDetails;

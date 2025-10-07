import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Product from "./Product";
import LoadingProducts from "../LoadingProducts";

const Products = ({ title, data }) => {
  const breakpoints = {
    1500: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  };
  return (
    <section className="mb-[100px]">
      <div className="container">
        <div className="border-b-2 text-gray-900 mb-6 flex flex-col gap-2">
          <h1 className="text-3xl text-gray-900 font-semibold">{title}</h1>
          <p className="mb-2 text-gray-500 font-semibold md:text-xl">
            Add bestselling products to weekly line up
          </p>
        </div>

        <Swiper
          navigation={true}
          breakpoints={breakpoints}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          {data.map((product) => (
            <SwiperSlide>
              <Product data={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;

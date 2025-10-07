import React from "react";
import { useCartContext } from "../components/context/CartItems";
import Product from "../components/Products/Product";
import PageTransition from "../components/PageTransition";

const FavoriteItems = () => {
  const { favoriteItems } = useCartContext();
  return (
    <PageTransition>
      <div className="container pt-[220px] md:pt-[180px]  min-h-[100vh] pb-[80px]">
        <h1 className="text-[30px] text-gray-900 font-semibold mb-[30px]">
          Favorite Products :
        </h1>
        {favoriteItems.length === 0 ? (
          <h1 className="mt-[30px] text-xl">No Favorite Products yet.</h1>
        ) : (
          <div className="flex gap-5 flex-wrap h-full">
            {favoriteItems.map((item) => (
              <div className="w-[280px]">
                <Product data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default FavoriteItems;

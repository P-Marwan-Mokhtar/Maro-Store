import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SideCart from "./components/SideCart";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import BackToTop from "./components/BackToTop";
import FavoriteItems from "./pages/FavoriteItems";
import CategoryProducts from "./pages/CategoryProducts";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import MensProducts from "./pages/MensProducts";
import WomensProducts from "./pages/WomensProducts";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <BackToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favoriteItems" element={<FavoriteItems />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mensProducts" element={<MensProducts />} />
        <Route path="/womensProducts" element={<WomensProducts />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

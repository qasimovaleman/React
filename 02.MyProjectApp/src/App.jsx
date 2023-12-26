import { Route, Routes } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import AboutPage from "./pages/about-page";
import HomePage from "./pages/home-page";
import NotFound from "./pages/not-found";
import ProductDetails from "./pages/product-details";
import ProductsPage from "./pages/products-page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

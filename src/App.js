import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Categories } from "./pages/Categories/Categories";
import { Product } from "./pages/Product/Product";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </ShoppingCartProvider>
  );
}

export default App;

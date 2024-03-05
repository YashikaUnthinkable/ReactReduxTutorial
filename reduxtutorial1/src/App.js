import Headers from "./Containers/Headers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./Containers/ProductListing";
import ProductDetail from "./Containers/ProductDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

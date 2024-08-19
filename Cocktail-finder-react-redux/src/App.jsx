import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Help from "./Pages/Help";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/Cocktail-finder-react-redux/"
          element={
            <>
              <Layout>
                <SearchBox />
                <HomePage />
              </Layout>
            </>
          }
        />
        <Route path="/products"  element={
            <>
              <Layout>
                <SearchBox />
                <HomePage />
              </Layout>
            </>
          } />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

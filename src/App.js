import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import PageNotFound from './Components/PageNotFound';
import SearchBox from './Components/SearchBox';
import HomePage from './Pages/HomePage';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <Router basename="/Cocktail-finder-react-redux">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <SearchBox />
              <HomePage />
            </Layout>
          }
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

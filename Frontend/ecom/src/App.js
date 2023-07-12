import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Layout/Header';
import Home from './Component/Home';
import Footer from './Component/Layout/Footer';
import ProductDetail from './Component/Product/ProductDetail';

function App() {
  return(
    <>
    <BrowserRouter>
   <Header/>
   <Routes>
   <Route index element={<Home />} />
   <Route path='/product/:id' element={<ProductDetail />} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
    

}

export default App;

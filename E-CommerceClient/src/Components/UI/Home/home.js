import React, { useState, useEffect } from 'react';
import Loader from '../../../Services/ReactSpinnerService';
import ProductList from '../Products/ProductList';
import Slider from './Slider';
import Catalog from './Catalog';
import Reference from './Reference';
import PopularProduct from './PopularProduct';
const Home = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Örnek: Sayfa yüklendikten sonra 2 saniye boyunca spinner'ı göster, sonra gizle
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
 
      <div>
        {/* Sayfa içeriği */}
        <Slider/>
        <Reference/>

        <Catalog/>
        <PopularProduct/>
      </div>
  </div>
  );
};

export default Home;
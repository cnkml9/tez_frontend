import React, { useState, useEffect } from 'react';
import HttpClientService from '../../Services/HttpClientService';
import Loader from '../../../Services/ReactSpinnerService';
import { useLocation,useNavigate } from 'react-router-dom';


const PopularProduct = () => {

    const navigate = useNavigate();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const httpClient = new HttpClientService();
        let response;
          response = await httpClient.dynamicGet('http://localhost:5004/api/Catalog/PopularProduct');
          if (response) {
            // response içinde catalogItems varsa setProducts yap
            setProducts(response);
          } else  {
            console.error('Geçersiz veya eksik veri alındı.');
          }
    
        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
       <Loader/>
      ) : (
        <main style={{ backgroundColor: '#edece8',marginBottom:45}} class="main-bg ">

        <div style={{marginBottom:-55}} class="container">
        <div class="row justify-content-center mb-80">
            <div class="col-lg-6 text-center">
                <div  class="text">
                    <h3 style={{ color: 'black',marginTop:55,fontWeight:700 }}  > Öne Çıkan Ürünler</h3>
                    <div style={{ background: 'black' }} class="underline"></div>

                </div>
              
            </div>
        </div>
    </div>

     
    
    
        <section class="main-shop p-3">
            <div class="container pb-5">
                <div class="row md-marg">
                  
                    <div class="col-lg-12">
                        <div class="shop-products">
                         
                            <div class="row">
    
                            {products.map((product) => (                           
                                <div className="col-md-2 border-product" key={product.id}>
                                    <div className="item">
                                    <div className="img">
                                        <img src="/Light/assets/imgs/shop/5.jpg" alt="" />
                                        <a href="#0" className="add-cart">Add to Cart</a>
                                        <span className="fav"><i className="far fa-heart"></i></span>
                                    </div>
                                    <div className="cont">
                                        <div className="rate">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        </div>
                                        <h6 style={{ color: 'white' }} >{product.name}</h6>
                                        <h5>${product.price}</h5>
                                    </div>
                                    </div>
                                </div>
                                ))}
    
                                
                            
                            </div>
                     
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    
    
    </main>
    
      )}
    </div>
  );
};

export default PopularProduct;

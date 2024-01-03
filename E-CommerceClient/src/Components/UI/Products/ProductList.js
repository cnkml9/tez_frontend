import React, { useState, useEffect } from 'react';
import HttpClientService from '../../Services/HttpClientService';
import Loader from '../../../Services/ReactSpinnerService';
import { useLocation,useNavigate } from 'react-router-dom';


const ProductList = () => {

  const navigate = useNavigate();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [activePage, setActivePage] = useState(Number(searchParams.get('pi')) || 1);

  let pi = searchParams.get('pi') || 2;
  let ps = searchParams.get('ps') || 0;
  let type = searchParams.get('type');
  
  const handlePageClick = (page,ps) => {
    setActivePage(page);
    // Sayfa değiştikçe URL'i güncelle
    searchParams.set('pi', page);

    // Yeni URL'i geçmişe ekleyerek sayfa yenilendiğinde de durumu koru
    window.history.pushState({}, '', `${location.pathname}?${searchParams.toString()}`);
    if(type)
    {
        navigate(`/home?type=${type}&pi=${page}&ps=${ps}`);
    }
    else{
        navigate(`/home?pi=${page}&ps=${ps}`);
    }

  };

  const productDetailsClick = (id) =>{
    navigate(`/Home/ProductDetails/${id}`)
  }



  useEffect(() => {
    const fetchData = async () => {
      try {
        const httpClient = new HttpClientService();
        const searchParams = new URLSearchParams(window.location.search);
        let response;
    
  
        if (type) {
          response = await httpClient.dynamicGet(`http://localhost:5004/api/Catalog/${type}`, {
           
            pi: pi || 2,
            ps: ps || 0
          });
          
        if (response) {
          // response içinde catalogItems varsa setProducts yap
          setProducts(response);
        } else  {
          console.error('Geçersiz veya eksik veri alındı.');
        }
        } else {
          response = await httpClient.dynamicGet('http://localhost:5004/api/Catalog', {
            pi: pi || 2,
            ps: ps || 0
          });
          if (response) {
            // response içinde catalogItems varsa setProducts yap
            setProducts(response.catalogItems);
          } else  {
            console.error('Geçersiz veya eksik veri alındı.');
          }    
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
        <main class="main-bg">

        <header class="work-header section-padding pb-0">
            <div class="container mt-80">
                <div class="row">
                    <div class="col-12">
                        <div class="caption">
                            <h6 class="sub-title">Shopping</h6>
                            <h1>Shop.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
    
        <section class="main-shop section-padding">
            <div class="container">
                <div class="row md-marg">
                    <div class="col-lg-3">
                        <div class="sidebar">
    
                            <div class="item search mb-40">
                                <form action="contact.php">
                                    <div class="form-group">
                                        <input type="text" name="shop_search" placeholder="Search"></input>
                                        <button type="submit">
                                            <span class="pe-7s-search"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
    
                            <div class="item categories mb-40">
                                <div class="title">
                                    <h6>Categories</h6>
                                </div>
                                <div class="dot-list">
                                    <ul class="rest">
                                        <li><a href="http://localhost:3000/Home/Product?type=Footwear&pi=2&ps=0">Footwear</a></li>
                                        <li><a href="http://localhost:3000/Home/Product?type=Apparel&pi=2&ps=0">Apparel</a></li>
                                        <li><a href="http://localhost:3000/Home/Product?type=Electronics&pi=2&ps=0">Electronics</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
    
                            <div class="item price-range mb-40">
                                <div class="title">
                                    <h6>Filter by Price</h6>
                                </div>
                                <div class="wrapper">
                                    <div class="slider-range">
                                        <div class="progress"></div>
                                    </div>
                                    <div class="range-input">
                                        <input type="range" class="range-min" min="10" max="10000" value="10"
                                            step="100"></input>
                                        <input type="range" class="range-max" min="0" max="10000" value="7500"
                                            step="100"></input>
                                    </div>
                                    <div class="price-input d-flex align-items-center mt-15">
                                        <div>
                                            <div class="field">
                                                <span>$</span>
                                                <input type="number" class="input-min" value="10"></input>
                                            </div>
                                        </div>
                                        <div class="ml-auto">
                                            <div class="field">
                                                <span>$</span>
                                                <input type="number" class="input-max" value="7500"></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="item best-sale mb-40">
                                <div class="title">
                                    <h6>Best Sellers</h6>
                                </div>
    
                                <div class="line-list d-flex align-items-center">
                                    <div>
                                        <div class="img">
                                            <img src="/Light/assets/imgs/shop/1.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="cont">
                                            <div class="rate">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h6>Men Hooded</h6>
                                            <h5>$130.00</h5>
                                        </div>
                                    </div>
                                    <a href="#0" class="over-link"></a>
                                </div>
                                <div class="line-list d-flex align-items-center">
                                    <div>
                                        <div class="img">
                                            <img src="/Light/assets/imgs/shop/3.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="cont">
                                            <div class="rate">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h6>Men Hooded</h6>
                                            <h5>$130.00</h5>
                                        </div>
                                    </div>
                                    <a href="#0" class="over-link"></a>
                                </div>
                                <div class="line-list d-flex align-items-center">
                                    <div>
                                        <div class="img">
                                            <img src="/Light/assets/imgs/shop/5.jpg" alt=""></img>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="cont">
                                            <div class="rate">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>
                                            <h6>Men Hooded</h6>
                                            <h5>$130.00</h5>
                                        </div>
                                    </div>
                                    <a href="#0" class="over-link"></a>
                                </div>
                            </div>
    
                            <div class="item tags">
                                <div class="title">
                                    <h6>Popular Tags</h6>
                                </div>
    
                                <div class="tags-links">
                                    <a href="#0">Design</a>
                                    <a href="#0">Development</a>
                                    <a href="#0">Tech</a>
                                    <a href="#0">Blog</a>
                                    <a href="#0">Branding</a>
                                    <a href="#0">Mobile</a>
                                    <a href="#0">Ui-ThemeZ</a>
                                </div>
                            </div>
    
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="shop-products">
                            <div class="top-side d-flex align-items-end mb-40">
                                <div>
                                    <h6 class="fz-16 line-height-1">Showing 1–9 of 12 results</h6>
                                </div>
                                <div class="ml-auto">
                                    <div>
                                        <select class="form-control">
                                            <option value="Most Popular">Most Popular</option>
                                            <option value="Sort by average rating">Sort by average rating</option>
                                            <option value="Price [Lowest to Highest]">Price [Lowest to Highest]</option>
                                            <option value="Price [Highest to Lowest]">Price [Highest to Lowest]</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
    
                            {products.map((product) => (                           
                                <div className="col-md-4" key={product.id}>
                                    <div className="item mb-50">
                                    <div className="img">
                                        <img src="/Light/assets/imgs/shop/5.jpg" alt="" />
                                        <a href="" className="add-cart" onClick={()=>productDetailsClick(product.id)}  >İncele</a>
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
                                        <h6>{product.name}</h6>
                                        <h5>${product.price}</h5>
                                    </div>
                                    </div>
                                </div>
                                ))}
    
                                
                            
                            </div>
                            <div class="pagination d-flex justify-content-center mt-30">
                            <ul className="rest">
  <li className={activePage === 1 ? 'active' : ''}>
    <a href="" onClick={() => handlePageClick(1,0)}>
      1
    </a>
  </li>
  <li className={activePage === 2 ? 'active' : ''}>
    <a href="" onClick={() => handlePageClick(2,0)}>
      2
    </a>
  </li>
  <li className={activePage === 3 ? 'active' : ''}>
    <a href="" onClick={() => handlePageClick(3,0)}>
      3
    </a>
  </li>
  {/* Diğer sayfa numaralarını ekleyin */}
  <li>
    <a href="" onClick={() => handlePageClick(4,0)}>
      <i className="fas fa-chevron-right"></i>
    </a>
  </li>
</ul>
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

export default ProductList;

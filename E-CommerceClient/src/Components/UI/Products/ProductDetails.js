import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PopularProduct from '../Home/PopularProduct';
import AddBasketButton from '../Baskets/AddBasketButton';
import Loader from '../../../Services/ReactSpinnerService';
import { ToastContainer, toast } from 'react-toastify';
import notificationService from '../../Admin/NotificationService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5004/api/Catalog/GetById/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, [id]);


  const handleAddCart = () => {

    notificationService.success("Ürün Sepete Eklendi");
  }


  return (
      <div>
                    <ToastContainer />

      {product ? (
    
    <section class="product-details section-padding">
    <div class="container" style={{marginBottom:80}}>
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="img-preview">
                    <div class="gallery-top">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="img">
                                        <img src="/Light/assets/imgs/shop/1.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img">
                                        <img src="/Light/assets/imgs/shop/2.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img">
                                        <img src="/Light/assets/imgs/shop/3.jpg" alt=""></img>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="img">
                                        <img src="/Light/assets/imgs/shop/4.jpg" alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <div class="col-lg-6 offset-lg-1">
                <div class="product-info">
                    <div class="top-info">
                        <h6 class="main-color4">{product.name}</h6>
                        <div class="d-flex align-items-center">
                            <div>
                                <h4 class="line-height-1">${product.price}</h4>
                            </div>
                            <div class="ml-auto">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <div class="rate fz-12 opacity-7">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                    </div>
                                    <div class="ml-10">
                                        <p class="fz-13">(1 Review)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text mt-30">
                            <p>{product.description}.</p>
                        </div>
                        <div class="dot-list mt-30">
                            <ul class="rest">
                                <li class="mb-15">{product.catalogType.type}</li>
                                <li>{product.catalogBrand.brand}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
                        <div class="d-flex align-items-center">
                            <div>
                                <div class="counter">
                                    <span class="down" onClick='decreaseCount(event, this)'>-</span>
                                    <input type="text" value="1"></input>
                                    <span class="up" onClick='increaseCount(event, this)'>+</span>
                                </div>
                            </div>
                            <div class="ml-auto" onClick={handleAddCart}>
                            
                                <AddBasketButton 
                                Id={1}
                                productId={product.id}
                                productName={product.name}
                                unitPrice={product.price}
                                oldUnitPrice={product.price}
                                quantity={10}
                                pictureUrl={product.pictureUri}
                              />
                            </div>
                        </div>
                    </div>
                    <div class="mt-40">
                        <ul class="rest">
                            <li class="d-flex align-items-center mb-15">
                                <strong>SKU :</strong>
                                <span class="ml-10">8552635</span>
                            </li>
                            <li class="d-flex align-items-center mb-15">
                                <strong>Kategori :</strong>
                                <span class="ml-10"><a href="#0">{product.catalogType.type}</a></span>
                            </li>
                            <li class="d-flex align-items-center">
                                <strong>Marka :</strong>
                                <span class="ml-10"><a
                                        href="#0">{product.catalogBrand.brand}</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-100">
            <div class="col-lg-11">
                <div class="overview" id="tabs">
                    <ul class="rest tab-links mb-30">
                        <li class="item-link current" data-tab="tabs-1">
                            <h6>Description</h6>
                        </li>
                        <li class="item-link" data-tab="tabs-2">
                            <h6>Information</h6>
                        </li>
                        <li class="item-link" data-tab="tabs-3">
                            <h6>Reviews (1)</h6>
                        </li>
                    </ul>
                    <div class="tab-cont">
                        <div class="tab-content current" id="tabs-1">
                            <div class="item">
                                <div class="text">
                                    <p class="mb-15">Percentage off promotions, discounts, or sale
                                        markdowns are most customarily based on our own opinion of the
                                        value of this product, which is not intended to reflect a former
                                        price at which this product has sold in the recent past.</p>
                                    <p>Class aptent taciti sociosqu ad litora torquent per conubia
                                        nostra, per inceptos himenaeos. Nam eget neque eu ipsum laoreet
                                        molestie nec vel nulla. Aenean iaculis, neque ultricies
                                        efficitur ultricies, risus sapien dapibus ante, ac venenatis
                                        nisi est nec sem. Vestibulum blandit tincidunt felis a cursus.
                                        Donec eu tortor vitae metus scelerisque sollicitudin ut congue
                                        est.</p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-content" id="tabs-2">
                            <div class="item info">
                                <ul class="rest">
                                    <li class="d-flex align-items-center mb-15">
                                        <span class="text-u fw-500">Color</span>
                                        <span class="line"></span>
                                        <span class="ml-auto">Blue, Gray, Green, Red</span>
                                    </li>
                                    <li class="d-flex align-items-center mb-15">
                                        <span class="text-u fw-500">Size</span>
                                        <span class="line"></span>
                                        <span class="ml-auto">Large, Medium, Small</span>
                                    </li>
                                    <li class="d-flex align-items-center mb-15">
                                        <span class="text-u fw-500">Material</span>
                                        <span class="line"></span>
                                        <span class="ml-auto">Cotton, Lather, Silk</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-content" id="tabs-3">
                            <div class="item reviews">
                                <div class="reviews-area">
                                    <div class="d-flex">
                                        <div>
                                            <div class="img circle-100">
                                                <img src="/Light/assets/imgs/testim/1.jpg" alt=""
                                                    class="circle-img"></img>
                                            </div>
                                        </div>
                                        <div class="cont ml-30">
                                            <div class="rate fz-12 opacity-7 mb-10">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="far fa-star"></i>
                                            </div>
                                            <h6 class="fz-17 fw-400">Evie Howarth – <span
                                                    class="fz-14 opacity-7">February 10, 2023</span>
                                            </h6>
                                            <p>Aenean iaculis, neque ultricies efficitur ultricies,
                                                risus sapien dapibus ante, ac venenatis nisi est nec
                                                sem. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Vestibulum ut pellentesque ante.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="add-review mt-50">
                                    <div>
                                        <h6>Add a review</h6>
                                        <p class="fz-14">Your email address will not be published.
                                            Required fields are marked *</p>
                                    </div>
                                    <div class="d-flex align-items-center mt-30">
                                        <div>
                                            <p class="fz-13">Your Rating</p>
                                        </div>
                                        <div>
                                            <div class="star-rating ml-10">
                                                <input id="star-5" type="radio" name="rating"
                                                    value="star-5" />
                                                <label for="star-5" title="5 stars">
                                                    <i class="active fas fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-4" type="radio" name="rating"
                                                    value="star-4" />
                                                <label for="star-4" title="4 stars">
                                                    <i class="active fas fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-3" type="radio" name="rating"
                                                    value="star-3" />
                                                <label for="star-3" title="3 stars">
                                                    <i class="active fas fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-2" type="radio" name="rating"
                                                    value="star-2" />
                                                <label for="star-2" title="2 stars">
                                                    <i class="active fas fa-star" aria-hidden="true"></i>
                                                </label>
                                                <input id="star-1" type="radio" name="rating"
                                                    value="star-1" />
                                                <label for="star-1" title="1 star">
                                                    <i class="active fas fa-star" aria-hidden="true"></i>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form mt-50">
                                        <form action="contact.php">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="form-group mb-30">
                                                        <input type="text" name="name" placeholder="Your Name*" required></input>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="form-group mb-30">
                                                        <input type="email" name="email" placeholder="Your Email*" required></input>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <textarea name="comment" placeholder="Your Review*"></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="checkbox mt-10">
                                                        <input type="checkbox" id="saveInfo" name="userinfo" value="userinfo" />
                                                        <label for="saveInfo">Save my name, email, and website in this browser for the next time I comment.</label>
                                                      </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="text-center mt-40">
                                                        <button type="submit" class="butn butn-md butn-bord">
                                                            <span>Submit</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    < PopularProduct/>
</section>
  ) : (
        <Loader/>
      )}
    </div>
  );
};

export default ProductDetail;

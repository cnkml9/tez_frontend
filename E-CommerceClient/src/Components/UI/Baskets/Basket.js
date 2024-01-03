import React, { useState ,useEffect} from 'react';
import UpdateBasketButton from './UpdateBasketButton';
import BasketService from './BasketService';
import notificationService from '../../Admin/NotificationService';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../../Services/ReactSpinnerService';

const Basket = () => {

  const [basketData, setBasketData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      // Yukarıda verdiğim GetBasket fonksiyonunu burada kullanabilirsiniz
      // API'den gelen veriyi state'e set ediyoruz
      const result = await BasketService.GetBasket();
      setBasketData(result);
    };

    fetchData();
  }, []); // useEffect sadece bir kere çalışsın diye boş bağımlılık dizisi []


  const buyerId = '123';
  const productId = 1;
  const productName = 'Ürün Adı';
  const unitPrice = 19.99;
  const oldUnitPrice = 24.99;
  const quantity = 2;
  const pictureUrl = 'https://example.com/product.jpg';

    let resp = BasketService.GetBasket();
    console.log(resp);


      const increaseCount = (itemId) => {
        setBasketData((prevBasketData) => {
          const updatedItems = prevBasketData.items.map((item) => {
            if (item.productId === itemId) {
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
      
          return { ...prevBasketData, items: updatedItems };
        });
      };
      
      const decreaseCount = (itemId) => {
        setBasketData((prevBasketData) => {
          const updatedItems = prevBasketData.items.map((item) => {
            if (item.productId === itemId && item.quantity > 0) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
      
          return { ...prevBasketData, items: updatedItems };
        });
      };

      const DeleteBasket=(id) =>{
        BasketService.DeleteBasket(id);
        window.location.href = '/home/cart';

      }
      

    return (


<div>
<header class="work-header" style={{marginTop:15}}>
                    <div class="container" style={{backgroundColor:'#ffaa17',borderRadius:55,padding:55}}>
                        <div class="row">
                            <div class="col-12">
                                <div class="caption">
                                    <h6 class="sub-title">Shopping</h6>
                                    <h2>Sepetim</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {basketData ? (
      <section class="shop-cart section-padding">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-11">
                  <div>
                      <table>
                          <thead>
                              <tr>
                                  <th>{resp.buyerId}</th>
                                  <th>Fiyat</th>
                                  <th>Adet</th>
                                  <th>Toplam</th>
                                  <th>&nbsp;</th>
                              </tr>
                          </thead>
                          <tbody>
                          {basketData.items.map(item => (
                              <tr>
                                  <td data-column="Product">
                                      <div class="d-flex align-items-center">
                                          <div>
                                              <div class="img icon-img-80">
                                                  <img src="/Light/assets/imgs/shop/5.jpg" alt=""></img>
                                              </div>
                                          </div>
                                          <div class="ml-30">
                                              <h6>{item.productName}</h6>
                                          </div>
                                      </div>
                                  </td>
                                  <td data-column="price">
                                      <h5 class="main-color4 fz-18">${item.unitPrice}</h5>
                                  </td>
                                  <td data-column="	Quantity">
                                  <div className="counter">
                                <span className="down" onClick={() => decreaseCount(item.productId)}>
                                -
                                </span>
                                <input type="text" value={item.quantity} readOnly />
                                <span className="up" onClick={() => increaseCount(item.productId)}>
                                +
                                </span>
                            </div>
                                  </td>
                                  <td data-column="Subtotal">
                                      <h5 class="main-color4 fz-18">${item.unitPrice}</h5>
                                  </td>
                                  <td class="remove">
                                      <a href="#0">
                                          <span class="pe-7s-close" onClick={() => DeleteBasket(item.id)}></span>
                                      </a>
                                  </td>
                              </tr>
                             ))}

                          </tbody>
                      </table>
                  </div>
                  <div class="row mt-80">
                      <div class="col-lg-6">
                          <div class="coupon mt-40">
                              <h4>İndirim</h4>
                              <p class="fz-13">Lütfen Geçerli Bir Kupon Kodu Giriniz.</p>
                              <form action="contact.php">
                                  <div class="form-group d-flex mt-30">
                                      <input type="text" name="coupon_code"></input>
                                      <button type="submit" class="butn butn-md butn-bord">
                                          <span>Uygula</span>
                                      </button>
                                  </div>
                                  <span class="fz-13 opacity-7 mt-10">Kupon Kodu</span>
                              </form>
                          </div>
                      </div>
                      <div class="col-lg-4 offset-lg-2">
                          <div class="total mt-40">
                              <h4>Sepet Toplam Ücret</h4>
                              <ul class="rest mt-30">
                               
                                  <li>
                                      <h6>Toplam Fiyat : <span class="fz-16 main-color4 ml-10">$260.00</span></h6>
                                  </li>
                              </ul>
                          
                              <div className="custom-toast-container">
                                <ToastContainer/>
                                </div>
                                <div onClick={() => notificationService.success("Sepetiniz Güncellendi")}>
                              <UpdateBasketButton
                                buyerId={buyerId}
                                productId={productId}
                                productName={productName}
                                unitPrice={unitPrice}
                                oldUnitPrice={oldUnitPrice}
                                quantity={quantity}
                                pictureUrl={pictureUrl}
                              />
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
) : (
    <Loader/>)}
</div>
    );
  }

export default Basket;

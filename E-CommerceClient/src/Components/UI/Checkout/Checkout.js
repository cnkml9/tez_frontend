import React, { useState ,useEffect} from 'react';
import BasketService from '../Baskets/BasketService';
import CheckoutButton from './CheckoutButton';


const Checkout = () => {


    const [orderDetails, setOrderDetails] = useState({
        city: '',
        street: '',
        state: '',
        country: '',
        zipCode: '',
        cardNumber: '',
        cardHolderName: '',
        cardExpiration: '',
        cardSecurityNumber: '',
        cardTypeId: 1,
        buyer: '',
      });


      const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };
    


    const [basketData, setBasketData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        // Yukarıda verdiğim GetBasket fonksiyonunu burada kullanabilirsiniz
        // API'den gelen veriyi state'e set ediyoruz
        const result = await BasketService.GetBasket();
        setBasketData(result);
            orderDetails.buyer=result.buyerId;
      };
  
      fetchData();
    }, []); // useEffect sadece bir kere çalışsın diye boş bağımlılık dizisi []
  

   
    return (

        <section class="shop-checkout section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="order-form">
                        <h4 class="mb-40">Billing Details</h4>
                        <form action="contact.php">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">city</label>
                                        <input type="text" name="city" value={orderDetails.city} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">street</label>
                                        <input type="text" name="street" value={orderDetails.street} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">state</label>
                                        <input type="text" name="state" value={orderDetails.state} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Country *</label>
                                        <input type="text" name="country" value={orderDetails.country} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">zipCode*</label>
                                        <input type="text" name="zipCode" value={orderDetails.zipCode} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">cardNumber</label>
                                        <input type="text" name="cardNumber" value={orderDetails.cardNumber} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="">cardHolderName</label>
                                        <input type="text" name="cardHolderName" value={orderDetails.cardHolderName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">cardExpiration</label>
                                        <input type="text" name="cardExpiration" value={orderDetails.cardExpiration} onChange={handleChange} />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="">cardSecurityNumber</label>
                                        <input type="text" name="cardSecurityNumber" value={orderDetails.cardSecurityNumber} onChange={handleChange} />
                                    </div>
                                </div>
                               
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-5 offset-lg-1">
                    <div class="checkout-order-info">
                        <h4 class="mb-40">Your Order</h4>
                        <div>
                        {basketData ? (

                            <ul class="rest">

                         
                          {basketData.items.map(item => (
                            <li class="mb-5">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <p>{item.productName}</p>
                                        </div>
                                        <div class="ml-auto">
                                            <h5 class="fz-18">${item.unitPrice}</h5>
                                        </div>
                                    </div>
                                </li>
                             ))}

                               
                            
                                <li class="pt-10 bord-thin-top">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <h6>Subtotal</h6>
                                        </div>
                                        <div class="ml-auto">
                                            <h5 class="main-color4 fz-20">$275.00</h5>
                                        </div>
                                    </div>
                                </li>
                                <li class="pt-10 bord-thin-top bord-thin-bottom">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <h6>Total</h6>
                                        </div>
                                        <div class="ml-auto">
                                            <h5 class="main-color4 fz-20">$275.00</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        ): (
                            <p>Loading...</p>
                          )}
                            <div class="text mt-40">
                                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#0">privacy policy</a>.</p>
                            </div>
                            <div class="mt-30">
                                <CheckoutButton 
                                 city={orderDetails.city}
                                 street={orderDetails.street}
                                 state={orderDetails.state}
                                 country={orderDetails.country}
                                 zipCode={orderDetails.zipCode}
                                 cardNumber={orderDetails.cardNumber}
                                 cardHolderName={orderDetails.cardHolderName}
                                 cardExpiration="2023-12-25T16:28:18.992Z"
                                 cardSecurityNumber={orderDetails.cardSecurityNumber}
                                 cardTypeId={orderDetails.cardTypeId}
                                 buyer={orderDetails.buyer}
                            
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );

  }

export default Checkout;

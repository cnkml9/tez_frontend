import React, { useState, useEffect } from 'react';
import TokenService from '../Auth/TokenService';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {

      const isAuthenticated = TokenService.isAuthenticated();
  
    if (!isAuthenticated) {
      console.error('Kullanıcı oturum açmamış');
      return null; // Oturum açılmamışsa null dönebilirsiniz veya başka bir işlem yapabilirsiniz
    }
  
    const accessToken = TokenService.getAccessToken();
  
    try {
      const response = await fetch('https://localhost:5002/api/Order/GetOrder', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      });
  
          if (!response.ok) {
          throw new Error('Siparişleri alma hatası');
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Siparişleri alma hatası:', error);
      }
    };

    fetchOrders();
  });

  return (
    <>
    
    <div class="container" style={{backgroundColor:'#ffaa17',borderRadius:55,padding:55,marginTop:50}}>
                        <div class="row">
                            <div class="col-12">
                                <div class="caption">
                                    <h6 class="sub-title">Hesabım</h6>
                                    <h2>Siparişlerim</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-list-container">
  <div className="row">
    {orders.map(order => (
      <div key={order.id} className="col-md-6">
        <ul className="order-list">
          <li className="order-item">
            <div className="order-header">
              <h3 className="order-title">Sipariş Tarihi: {new Date(order.orderDate).toLocaleString()}</h3>
              <p className="order-description">{order.description}</p>
            </div>

            {/* Adres bilgileri */}
            <div className="address-info">
              <h4>Adres Bilgileri:</h4>
              <p className="address-field">{order.address.street}</p>
              <p className="address-field">{order.address.city}, {order.address.state}</p>
              <p className="address-field">{order.address.country}, {order.address.zipCode}</p>
            </div>

            {/* Sipariş Detayları */}
            <div className="order-details">
              <h4>Sipariş Detayları:</h4>
              <ul className="order-items">
                {order.orderItems.map(item => (
                  <li key={item.id} className="order-item-detail">
                    <p>{item.productName}</p>
                    <p>{item.quantity} adet</p>
                    <p>{item.price} ₺</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    ))}
  </div>
</div>

    </>

  );
};

export default OrderList;

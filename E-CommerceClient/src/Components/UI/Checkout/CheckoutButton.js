import React, { useState } from 'react';
import CheckoutService from './CheckoutService';
const CheckoutButton = ({ city, street, state, country, zipCode, cardNumber, cardHolderName, cardExpiration, cardSecurityNumber, cardTypeId, buyer }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);


    const checkoutData1 = {
        city: city,
        street: street,
        state: state,
        country: country,
        zipCode: zipCode,
        cardNumber: cardNumber,
        cardHolderName: cardHolderName,
        cardExpiration: cardExpiration,
        cardSecurityNumber: cardSecurityNumber,
        cardTypeId: 2,
        buyer: buyer,
      };

    const checkoutData = {
        city: "string",
        street: "string",
        state: "string",
        country: "string",
        zipCode: "string",
        cardNumber: "string",
        cardHolderName: "string",
        cardExpiration: "2023-12-25T16:28:18.992Z",
        cardSecurityNumber: "string",
        cardTypeId: 0,
        buyer: "string",
      };

      console.log(checkoutData);

      console.log(checkoutData1);

      const response = await CheckoutService.checkout(checkoutData1);

      console.log('Checkout başarılı:', response);
      // Başarılı duruma göre bir işlem yapabilirsiniz, örneğin yönlendirme veya bildirim gösterme

    } catch (error) {
      console.error('Checkout hatası:', error);
      // Hata durumunda bir işlem yapabilirsiniz, örneğin kullanıcıya bir hata mesajı gösterme
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleCheckout} disabled={loading}>
      {loading ? 'İşleniyor...' : 'Sepeti Onayla'}
    </button>
  );
};

export default CheckoutButton;

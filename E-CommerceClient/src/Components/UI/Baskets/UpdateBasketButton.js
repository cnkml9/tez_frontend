// UpdateBasketButton.js
import React from 'react';
import BasketService from './BasketService';

const UpdateBasketButton = ({ buyerId, productId, productName, unitPrice, oldUnitPrice, quantity, pictureUrl }) => {
  const handleUpdateBasket = () => {
    const updateRequest = {
      buyerId,
      items: [
        {
          id: 'string', // Bu kısmı nasıl elde edeceğinize bağlı olarak güncellemeniz gerekebilir
          productId,
          productName,
          unitPrice,
          oldUnitPrice,
          quantity,
          pictureUrl,
        },
      ],
    };

    BasketService.updateBasket(updateRequest);
  };

  return (
    <button type="submit" class="butn butn-md butn-bg main-colorbg4 text-dark"  onClick={handleUpdateBasket}> Sepeti Güncelle</button>
  );
};

export default UpdateBasketButton;

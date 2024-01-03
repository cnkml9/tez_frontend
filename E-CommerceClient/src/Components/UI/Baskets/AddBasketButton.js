// UpdateBasketButton.js
import React from 'react';
import BasketService from './BasketService';
import { useNavigate } from 'react-router-dom';


const AddBasketButton = ({ buyerId, productId, productName, unitPrice, oldUnitPrice, quantity, pictureUrl }) => {

  const navigate = useNavigate();


  const handleUpdateBasket = () => {

    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      }
      

    const updateRequest = {
     
        
          id: generateGUID(), 
          productId,
          productName,
          unitPrice,
          oldUnitPrice,
          quantity,
          pictureUrl,
        
    };

    BasketService.AddBasket(updateRequest);

  };

  return (

    <a class="butn butn-md butn-bord" onClick={handleUpdateBasket} style={{cursor:'pointer'}}>
    <span class="text-u fz-13">Add To Cart</span>
      </a>

  );
};

export default AddBasketButton;

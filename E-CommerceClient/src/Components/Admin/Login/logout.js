
import React from 'react';
import notificationService from '../NotificationService';
import { ToastContainer, toast } from 'react-toastify';


const Logout = () => {

  const handleLogout = () => {

    notificationService.success("Çıkış Yapılıyor");

 
    // Remove the access token from local storage

    localStorage.removeItem('accessToken');

    // Redirect to the home page or any other desired route
    setTimeout(() => {
      window.location.href = '/home/DefaultLogin';
    }, 3000);


  
  };

  return (
  
<>
 <li class="nav-item nav-login">
 <a  class="nav-link float-right" onClick={handleLogout}  style={{ cursor: 'pointer' }}><i class="fas fa-user"></i>Çıkış Yap</a>
</li>
<div>
<ToastContainer />
</div>
</>
  );
};

export default Logout;
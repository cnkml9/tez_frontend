import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import notificationService from '../NotificationService';
import { ToastContainer, toast } from 'react-toastify';

const clientId = "557843566043-9m4ljvgqqma766euuib59579g4352rcg.apps.googleusercontent.com";

function Logout({ onLogout }) {

  const navigate = useNavigate();


  const onSuccess = () => {
    console.log("Logout successful!");
    localStorage.removeItem('accessToken');     // Dışarıdan gelen onLogout fonksiyonunu çağır
     if (onLogout) {
      notificationService.success("Çıkış Yapılıyor");

      setTimeout(() => {
        window.location.href = '/home/DefaultLogin';
      }, 2000);
    
      onLogout();
    }
    

   
  };

  const onFailure = (error) => {
    console.error("Logout failed:", error);
  };

  return (

<><ToastContainer />

    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
    </>

  );
}

export default Logout;


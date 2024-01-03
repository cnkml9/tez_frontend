import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleLogout from './GoogleLogout';
import { useNavigate } from 'react-router-dom';

const LoginGoogle = () => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there is an access token in the local storage
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, []);

  const responseGoogle = async (response) => {
    if (response.profileObj) {
      const userData = {
        Id: response.googleId,
        idToken: response.tokenId,
        email: response.profileObj.email,
        name: response.profileObj.name,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        photoUrl: response.profileObj.imageUrl,
        provider: 'Google',
      };

      try {
        const serverResponse = await fetch('https://localhost:5005/api/Auth/GoogleLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (serverResponse.ok) {
          const responseData = await serverResponse.json();
          setAccessToken(responseData.accessToken);
          localStorage.setItem('accessToken', responseData.accessToken);      
          window.location.href = '/home';
   

        } else {
          console.error('Sunucudan hatalı bir yanıt aldı: ', serverResponse.statusText);
        }
      } catch (error) {
        console.error('Sunucu ile iletişim sırasında hata oluştu: ', error);
      }
    } else {
      console.log('Giriş Başarısız');
    }
  };

  const handleLogout = () => {
    setAccessToken('');
    localStorage.removeItem('accessToken');
  };

  return (
    <div id="signInButton" className="mt-4">
      {accessToken ? (
        <GoogleLogout onLogout={handleLogout} />
      ) : (
        <GoogleLogin
          clientId="557843566043-9m4ljvgqqma766euuib59579g4352rcg.apps.googleusercontent.com"
          buttonText="Google ile Giriş Yap"
          onSuccess={responseGoogle}
          onFailure={(res) => console.error('Google ile giriş başarısız: ', res)}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          className="btn btn-outline-danger"
        />
      )}
    </div>
  );
};

export default LoginGoogle;

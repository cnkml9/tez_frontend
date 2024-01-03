import { useState, useEffect } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import AuthService from './AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginGoogle from '../../Admin/Login/loginGoogle';
import DefaultLogin from './DefaultLogin';
import ProductList from '../../Admin/Products/ProductList';
import notificationService from '../../Admin/NotificationService';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessTokenLifeTime, setAccessTokenLifeTime] = useState(45);

  useEffect(() => {
    // Check if there is an access token in the local storage
    const storedAccessToken = localStorage.getItem('accessToken');
    setAccessToken(storedAccessToken);

    // If there is an access token, navigate to the Home component
    if (storedAccessToken) {
      window.location.href = '/home';
    }
  }, [navigate]);

  const handleLogin = async () => {
    await AuthService.login(usernameOrEmail, password, accessTokenLifeTime);
    const storedAccessToken = localStorage.getItem('accessToken');
    setAccessToken(storedAccessToken);

    // If there is an access token, navigate to the Home component
    if (storedAccessToken) {
      notificationService.success("Giriş Başarılı");
      setTimeout(() => {
        window.location.href = '/home';
      }, 2000);
    }
    else{
      notificationService.error("Kullanıcı Adı Veya Şifre Hatalı");
    }
  };


  return (
    <div className="container">
      <div className="row">
      <div className="custom-toast-container">
      <ToastContainer />
      </div>
        <div
          className="col-lg-6 col-12 mt-5 auth-login"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            paddingTop:30
          }}
        >
          <h2 className="mb-4">Giriş Yap</h2>
          <div className="underline"></div>

          <form style={{ width: '100%' }}>
            <div className="mb-3">
              <label className="form-label">Kullanıcı Adı veya E-Posta:</label>
              <input
                type="text"
                className="form-control"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Şifre:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handleLogin}
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '10px 35px',
                  cursor: 'pointer',
                }}
              >
                Giriş Yap
              </button>
              <LoginGoogle />
            </div>
          </form>
          <div className="mb-3">
            <a href="/sifremi-unuttum">Şifremi Unuttum</a>
          </div>
          <div className="mb-3">
            <a href="/uye-ol">Üye Değilseniz Tıklayınız</a>
          </div>
        </div>

        <div className="col-lg-6 col-12 mt-5">
          {/* Örnek bir stok fotoğraf */}
          <img
            src="https://source.unsplash.com/random"
            alt="Random"
            style={{ width: '100%', height: 'auto', borderRadius: '8px',maxHeight:400 }}
          />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo odio. Vestibulum
            dapibus, mauris nec malesuada dapibus, metus nisi blandit urna.
          </p>
        </div>
      </div>
    </div>
  
  );
};

export default Login;

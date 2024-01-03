import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin/Admin'
import Customer from './Components/Admin/Customer/customer';
import AdminLayout from './Components/Admin/AdminLayout';
import Layout from './Components/UI/Layout/Layout';
import Home from './Components/UI/Home/home';
import Basket from './Components/UI/Baskets/Basket';
import ProductList from './Components/Admin/Products/ProductList';
import DefaultLogin from './Components/UI/Auth/DefaultLogin';
import Products from './Components/UI/Products/ProductList';
import ProductDetail from './Components/UI/Products/ProductDetails';
import Checkout from './Components/UI/Checkout/Checkout';

import OrderPage from './Components/UI/Orders/OrderPage';
import OrderList from './Components/UI/Orders/OrderList';

//google login
import LoginGoogle from './Components/Admin/Login/loginGoogle';
import Logout from './Components/Admin/Login/logout';
import { useEffect,useState  } from 'react';
import {gapi} from 'gapi-script';
const clientId ="557843566043-9m4ljvgqqma766euuib59579g4352rcg.apps.googleusercontent.com";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const responseGoogle = async (response) => {
    if (response.profileObj) {
      // Google'dan gelen kullanıcı bilgilerini alın
      const userData = {
        idToken: response.tokenId,
        email: response.profileObj.email,
        name: response.profileObj.name,
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        photoUrl: response.profileObj.imageUrl,
        provider: 'Google',
      };

      // Sunucuya kullanıcı bilgilerini gönderme işlemi burada yapılabilir
      try {
        const serverResponse = await fetch('https://localhost:7210/api/Users/google-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (serverResponse.ok) {
          // Sunucudan başarılı bir yanıt aldıysanız kullanıcı oturumunu başlatın
          setIsLoggedIn(true);
          setUser(userData);
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
    // Kullanıcıyı oturumu kapatmak için burada gerekli işlemleri yapabilirsiniz
    setIsLoggedIn(false);
    setUser(null);
  };

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  });


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="login" element={<LoginGoogle />} />
          <Route path="customer" element={<Customer />} />
          <Route path="Product" element={<ProductList />} />
        </Route>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="DefaultLogin" element={<DefaultLogin />} />
          <Route path='Product' element={<Products/>}/>
          <Route path='ProductDetails/:id' element={<ProductDetail />} />
          <Route path='Cart' element={<Basket/>}/>
          <Route path='Checkout' element={<Checkout/>}/>
          <Route path='OrderPage' element={<OrderPage/>}/>
          <Route path='OrderList' element={<OrderList/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
    // <div className='App' >
    //   <LoginGoogle/>
    //   <Logout/>
    // </div>
  );
}

export default App;

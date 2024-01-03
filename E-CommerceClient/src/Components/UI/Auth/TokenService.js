// AuthService.js
const TokenService = {
    isAuthenticated: () => {
      // Kullanıcının oturum açıp açmadığını kontrol etmek için uygun bir yöntem kullanın
      // Örneğin, localStorage'da bir token kontrol edebilirsiniz.
      const accessToken = localStorage.getItem('accessToken');
      return accessToken !== null;
    },
    getAccessToken: () => {
      // localStorage'dan accessToken alın
      return localStorage.getItem('accessToken');
    },
  };
  
  export default TokenService;
  
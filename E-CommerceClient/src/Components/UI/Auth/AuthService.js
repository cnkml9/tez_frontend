// login.js
import HttpClientService from "../../Services/HttpClientService";

class AuthService {
  static async login(usernameOrEmail, password, accessTokenLifeTime) {
    const httpClient = new HttpClientService();

    try {
      const url = `/Auth/Login?UserNameOrEmail=${encodeURIComponent(usernameOrEmail)}&Password=${encodeURIComponent(password)}&accesTokenLifeTime=${encodeURIComponent(accessTokenLifeTime)}`;
      const data = {
        UserNameOrEmail: usernameOrEmail,
        Password: password,
        AccessTokenLifeTime: accessTokenLifeTime,
      };

      const response = await httpClient.post(url, data);

      // Login işlemi başarılıysa response üzerinden gerekli işlemleri gerçekleştirin
      console.log('Login successful:', response);

      // AccessToken'i localStorage'e sakla
      localStorage.setItem('accessToken', response.accessToken);
      console.log(response.accessToken);

      // Örneğin, token'i sakladıktan sonra başka işlemler gerçekleştirebilirsiniz.

    } catch (error) {
      // Login işlemi başarısızsa error üzerinden hata işlemlerini gerçekleştirin
      console.error('Login failed:', error.message);

      // Örneğin, kullanıcıya hata mesajını gösterebilirsiniz.
    }
  }
}

export default AuthService;

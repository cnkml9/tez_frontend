// CheckoutService.js
import TokenService from "../Auth/TokenService";

const CheckoutService = {

  GetBasket: async () => {
    const isAuthenticated = TokenService.isAuthenticated();
  
    if (!isAuthenticated) {
      console.error('Kullanıcı oturum açmamış');
      return null; // Oturum açılmamışsa null dönebilirsiniz veya başka bir işlem yapabilirsiniz
    }
  
    const accessToken = TokenService.getAccessToken();
  
    try {
      const response = await fetch('https://localhost:5003/api/Basket/getbasket', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      });
  
      if (!response.ok) {
        console.error('API hatası:', response.status, response.statusText);
        return null; // Hata durumunu yönetmek için uygun bir işlem yapın
      }
  
      const result = await response.json();
      console.log('Basket güncelleme başarılı:', result);
  
      // API'den gelen cevapı uygun bir şekilde işleyerek kullanabileceğiniz bir yapı oluşturun
      const formattedResponse = {
        buyerId: result.buyerId,
        items: result.items.map(item => ({
          id: item.id,
          productId: item.productId,
          productName: item.productName,
          unitPrice: item.unitPrice,
          oldUnitPrice: item.oldUnitPrice,
          quantity: item.quantity,
          pictureUrl: item.pictureUrl,
        })),
      };
  
      return formattedResponse;
  
    } catch (error) {
      console.error('Hata:', error);
      return null; // Hata durumunu yönetmek için uygun bir işlem yapın
    }
  },
  

  checkout: async (updateRequest) => {
    const isAuthenticated = TokenService.isAuthenticated();

    if (!isAuthenticated) {
      // Kullanıcı oturum açmamışsa işlemi iptal et veya oturum açma sayfasına yönlendir
      console.error('Kullanıcı oturum açmamış');
      return;
    }

    const accessToken = TokenService.getAccessToken();

    try {
      const response = await fetch('https://localhost:5003/api/Basket/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(updateRequest),
      });

      if (!response.ok) {
        console.error('API hatası:', response);
        // Hata durumunu yönetmek için uygun bir işlem yapın
        return;
      }

      const result = await response.json();
      // API'den dönen sonuç ile gerekli işlemleri yapın

      console.log('Checkout  başarılı:', result);
    } catch (error) {
      console.error('Hata:', error);
    }
  },




};

export default CheckoutService;

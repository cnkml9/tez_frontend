import HttpClientService from "../../Services/HttpClientService";
import Product from "../../Contracts/Product";

class ProductService {
  constructor() {
    this.httpClient = new HttpClientService();
  }
  async get() {
    try {
        const queryParams = {
            field: 'name', // İstediğiniz alanı seçebilirsiniz, örneğin 'id' veya 'price'
            value: 'Product Name', // İstenilen alan değeri
          };
    
      const response = await this.httpClient.dynamicGet('/products',queryParams); // API'nin yolunu belirtmelisiniz.
      const productInstances = response.map(productData => new Product(productData.id, productData.name, productData.price,productData.stock));

      return productInstances;
    } catch (error) {
      throw error;
    }
  }


  async addProduct(product) {
    try {
      const response = await this.httpClient.post('/products', product);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;

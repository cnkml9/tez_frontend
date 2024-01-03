import axios from 'axios';

class HttpClientService {
  static baseURL = 'https://localhost:5005/api'; // Statik baseURL tanımı

  constructor() {
    this.client = axios.create({
      baseURL:HttpClientService.baseURL,
    });
  }

  async get(url, config = {}) {
    try {
      const response = await this.client.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async dynamicGet(url, queryParams = {}, config = {}) {
    try {
      const response = await this.client.get(url, {
        ...config,
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }


  async post(url, data, config = {}) {
    try {
      const response = await this.client.post(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    // Burada hata yönetimi işlemlerini gerçekleştirebilirsiniz.
    throw error;
  }
}

export default HttpClientService;

import HttpClientService from "./HttpClientService";

class DataService {
  constructor(dataType) {
    this.dataType = dataType;
    this.httpClient = new HttpClientService();
  }

  async getAllData(endpoint) {
    try {
      const data = await this.httpClient.get(endpoint, this.dataType);
      return data;
    } catch (error) {
      console.error(`An error occurred while fetching ${endpoint}:`, error);
      throw error;
    }
  }

  async createData(endpoint, data) {
  try {
    const createdData = await this.httpClient.post(endpoint, data);
    return createdData;
  } catch (error) {
    console.error(`An error occurred while creating data at ${endpoint}:`, error);
    throw error;
  }
}

}

export default DataService;

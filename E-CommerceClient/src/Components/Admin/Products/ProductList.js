import React, { Component } from 'react';
import ProductService from './ProductService';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

//datatable
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Ürün Adı', width: 200 },
    { field: 'price', headerName: 'Fiyat', width: 120 },
    { field: 'stock', headerName: 'Stok', width: 120 },
  ];
//datatable


class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.productService = new ProductService();
  }

  async componentDidMount() {
    try {
      const products = await this.productService.get(); // Ürünleri getiren bir metodu olduğunu varsayalım.
      console.log(products);
      this.setState({ products });
    } catch (error) {
      console.error("Ürünleri çekerken hata oluştu:", error);
    }
  }

  render() {
    
    const { products } = this.state;
    if (!products) {
        return <div>Loading...</div>; // Ürünler yüklenene kadar bekleme ekranı gösterilebilir.
      }
    return (
        <div style={{ height: 400, width: '100%' ,marginTop:20}}>
            <h4>Ürün Listesi</h4>
        <DataGrid rows={products} columns={columns} pageSize={5} />
      </div>
    );
  }
}

export default ProductList;

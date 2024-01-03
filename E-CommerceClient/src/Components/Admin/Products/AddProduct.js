import React, { Component } from 'react';
import ProductService from './ProductService';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import AddProductContract from '../../Contracts/Product';
import notificationService from '../NotificationService';
import { ToastContainer, toast } from 'react-toastify';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.addProductContract = new AddProductContract();
    this.state = {};
    Object.keys(this.addProductContract).forEach(fieldName => {
      this.state[fieldName] = '';
    });
    this.productService = new ProductService();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleAddProduct = async () => {
    const newProduct = { ...this.state };

    try {
       await this.productService.addProduct(newProduct);
      notificationService.success(notificationService.showSuccessMessage);
    } catch (error) {
      notificationService.error(notificationService.showErrorMessage);
    }
  };

  render() {
    return (
        <div style={{ marginTop:70}}>

      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          Yeni Ürün Ekle
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(this.addProductContract).map(fieldName => (
            <Grid item xs={12} sm={6} key={fieldName}>
              <TextField
                fullWidth
                label={fieldName}
                variant="outlined"
                name={fieldName}
                value={this.state[fieldName]}
                onChange={this.handleInputChange}
                margin="normal"
              />
            </Grid>
          ))}
        </Grid>
        <Button variant="contained" color="primary" onClick={this.handleAddProduct}>
          Ürün Ekle
        </Button>
        <ToastContainer />
      </Container>
      </div>
    );
  }
}

export default AddProduct;

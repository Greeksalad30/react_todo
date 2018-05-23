import React, { Component } from 'react';
import './App.css';
import AddProduct from './AddProduct'
import ProductItem from './ProductItem'

const products = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products')),
      title: 'products'
    };
    this.onDelete = this.onDelete.bind(this)
    this.onAdd = this.onAdd.bind(this)
    this.onEditSubmit = this.onEditSubmit.bind(this)

  }

  componentWillMount() {
    const products = this.getProducts()

    this.setState({ products })
  }

  getProducts() {
    return this.state.products
  }

  onDelete(name) {
    let products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    })
    console.log(filteredProducts)
    this.setState({ products: filteredProducts })
    localStorage.setItem(this.state.title, JSON.stringify(filteredProducts))
    //this.setState
  }

  onAdd(name, price, date) {
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({ products });
    localStorage.setItem(this.state.title, JSON.stringify(products))

  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName) {
        product.name = name;
        product.price = price
      }
      return product;
    })
    this.setState({ products })
    localStorage.setItem(this.state.title, JSON.stringify(products))
  }


  render() {

    return (
      <div className="App">
        <h1>Task Manager</h1>
        <AddProduct onAdd={this.onAdd}/>
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}/>
            )
          })
        }
      </div>
    );
  }
}

export default App;

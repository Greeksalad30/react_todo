import React, { Component } from 'react';

class AddProduct extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      msg: "You entered a duplicate or invalid character"
    }
  }

  checkDups(input) {
    const strings = localStorage.getItem('products');
    let collection = [], names;

    collection.push(strings);
    collection = JSON.parse(collection);

    collection = collection.map(col => {
      names = col

      return collection
    })

    if (input !== names.name && input.trim().length !== 0) {
      this.props.onAdd(input, this.priceInput.value)
    }

    else {
      alert(this.state.msg)
      return 0;
    }
  }

  onSubmit(event) {
    event.preventDefault();

    this.checkDups(this.nameInput.value);
    this.nameInput.value = '';
    this.priceInput.value = '';
  }

  render() {

    const { name, price } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
        <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
        <button>Add</button>
        <hr/>
      </form>
    );
  }
}

export default AddProduct;

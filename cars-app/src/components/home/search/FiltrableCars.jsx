import React, { Component } from 'react';
import Search from './Search'
import TableCars from '../../tablecars/TableCars';
import { Link } from 'react-router-dom';
import axios from 'axios';
import service from '../../../api/service';

class FiltrableCars extends Component{
  constructor(){
    super();
    this.state= {
    cars: [],
    renderCars: false,
    }
    this.service = service;
    this.seachCarHandler = this.seachCarHandler.bind(this);
//   console.log(data)

  }

  carList() {
    return this.state.carList.map((obj, idx) => {
      return <Link to={`/${obj.model}`} key={idx} className="list-group-item list-group-item-action">{obj.model} {obj.price}</Link>
    });
  }

  componentDidMount() {
    this.service.getAllCars()
    .then(response => {
        console.log(response)
        this.setState({cars: response, renderCars: true})
    })
  }
  
  seachCarHandler(OneCar) {
    const productCopy = [...this.data];  
    let onStock =[];
     if(!OneCar.stocked){
       onStock = productCopy.filter(e =>
        e.stocked        
       );                  
     }else{
        onStock = productCopy;
     }
    const searchedProduct = onStock.filter(e =>
        e.name.toLowerCase().includes(OneCar.name.toLowerCase())        
    );    
    this.setState({
      products: searchedProduct,
    })
  }

    render(){
        if (this.state.renderCars) {
            return (
                <div>
                    <Search SearchBar= {this.seachCarHandler}/>
                    <TableCars carsList={this.state.cars} />
                </div>
            );  
        } else {
            return null;
        }
    }  
}

export default FiltrableCars;
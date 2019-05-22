import React, { Component } from 'react';
import Search from './Search'
import TableCars from '../../tablecars/TableCars';
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
  }

  // carList() {
  //   return this.state.carList.map((obj, idx) => {
  //     return <Link to={`/${obj.model}`} key={idx} className="list-group-item list-group-item-action">{obj.model} {obj.price}</Link>
  //   });
  // }
  
  seachCarHandler(name) {
    this.service.getAllCars()
    .then(res => {
        if (name.length === 0) {
          this.setState({
            cars: [],
          });
        } else {
          const filterCar = res.filter((e) => e.model.toLowerCase().includes(name.toLowerCase()))
          this.setState({ cars: filterCar })
        }
        })
      .catch(error => console.log(error))
  }

  render() {
      return (
        <div>
          <Search SearchBar= {this.seachCarHandler}/>
          <TableCars setCarInfo={this.props.setCarInfo} carsList={this.state.cars} />
        </div>
      );  
  }  
}

export default FiltrableCars;
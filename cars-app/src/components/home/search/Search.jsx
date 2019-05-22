import React, { Component } from 'react';
import './search.css'
import { Link } from 'react-router-dom';

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      stocked: false,   
    }
    this.handlerChange = this.handlerChange.bind(this);  
  }
  
  handlerChange(event) {
    let { name, value } = event.target;    
    this.setState({[name]: value}, () =>{
      this.props.SearchBar(this.state.name)    
    })
  }
  
  render() {
    return (
      <div className='p-3 mb-2 bg-mercedes text-white'>
          <h3 className='search-bar'>Search for vehicle</h3>
        <div className="search-container search-tag">        
          <label>Enter car's name:</label>
          <input type="text" name="name" value={this.state.model} onChange={(e)=> this.handlerChange(e)}></input>
        </div>
      </div>
    )  
  }
}

export default Search;
import React, { Component } from 'react';
import './search.css'

class Search extends Component {
  
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      name: '',
      stocked: false,   
    }
    this.handlerChange = this.handlerChange.bind(this);  
    this.handlerCheckBox = this.handlerCheckBox.bind(this);  
  }  
  
  handlerChange(event) {
    let { name, value } = event.target;    
    this.setState({[name]: value}, () =>{
      this.props.SearchBar(this.state)    
    })
    // if(checkstock){

    // }    
  }

  handlerCheckBox(){
    this.setState({
        stocked: !this.state.stocked,
    })  
    this.props.SearchBar(this.state)
  }
  
  render() {
    return (
      <div className='p-3 mb-2 bg-mercedes text-white'>
          <h3 className='search-bar'>Search for vehicle</h3>
        <div className="search-container search-tag">        
          <label>Enter car's name:</label>
          <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handlerChange(e)}></input>
        </div>
      </div>
    )  
  }
}

export default Search;
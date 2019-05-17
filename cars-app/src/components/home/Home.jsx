import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carrousel from './Carrousel';
import MarketCard from './MarketCard';
import Search from './Search';
// import axios from 'axios';


class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
          <div>
            <Carrousel />
          </div>
          <div>
            <MarketCard />
          </div>
        <Link to='/Searchbar'>
        <div>
          <Search />
        </div>
        </Link>
      </div>
    )
  }
}

export default Home;
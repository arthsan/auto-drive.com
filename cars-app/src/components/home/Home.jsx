import React, { Component } from 'react';
import Carrousel from './Carrousel';
import MarketCard from './MarketCard';
import Search from './Search'
import AuthService from '../auth/auth-service';
import Quiz from './Quiz'
// import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    }

  render() {
    if(this.props.user) {
      return(
        <div>
            <div>
              <Carrousel />
            </div>
            <div >
              <MarketCard />
            </div>
            <div>
              <Search />
            </div>
            <div>
                <Quiz />
            </div>
        </div>
      )
    } else {
      return(
        <div>
            <div>
              <Carrousel />
            </div>
            <div >
              <MarketCard />
            </div>
            <div>
              <Search />
            </div>
        </div>
      )
    }
    
  }

    }

export default Home;
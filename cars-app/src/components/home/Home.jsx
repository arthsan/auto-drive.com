import React, { Component } from 'react';
import Carrousel from './Carrousel';
import MarketCard from './MarketCard';
import AuthService from '../auth/auth-service';
import Quiz from './Quiz'
import FiltrableCars from './search/FiltrableCars';
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
              <FiltrableCars setCarInfo={this.props.setCarInfo} />
            </div>
            <div>
                <Quiz getUser={this.props.loggedInUser}/>
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
              <FiltrableCars />
            </div>
        </div>
      )
    }
    
  }

    }

export default Home;
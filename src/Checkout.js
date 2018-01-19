import React, { Component } from 'react';
import './styles/3cols.css';
import './styles/col.css';
import './styles/page_items.css';
import './styles/reset.css';
import './styles/main.css'
import './styles/checkout.css'


class Checkout extends Component {



    render(){

        return(
            <div>
                <header>
            <div className="top">
            </div>
          </header>
          
            <nav>
              <ul>
                <li><a href="">Hats</a></li>
                <li><a href="">Gloves</a></li>
                <li><a href="#">Scarves</a></li>
                <li className="cart-info">
                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <div id="valID"></div>
                </li>
              </ul>
            </nav>
            
            <div className="image_container wood">  
                {/* --hero image div */}
            </div>
            <h1>Checkout Component</h1>
            <span></span>
            
            <i className="fa fa-shopping-bag fa-5x" aria-hidden="true"></i>
            </div>
        )
    }
}

export default Checkout
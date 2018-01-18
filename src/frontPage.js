import React, {Component} from "react";
import { ToggleButton } from "./components/toggleButton";
import './styles/3cols.css';
import './styles/col.css';
import './styles/page_items.css';
import './styles/reset.css';
import './styles/main.css';
import axios from 'axios'


class FrontPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            cart:[],
            products: [],
            val: 1
        }
      
      this.giveOrTakeItem = this.giveOrTakeItem.bind(this);
    }
    cartNumPlus(){
     var value = this.val++;
      document.getElementById("valID").innerHTML = value;
      console.log(value);
    }
    
    cartNumMinus(){
      var value = this.val--;
      document.getElementById("valID").innerHTML = value;
    }
    
// ask how to let inner function invocations be accessible from within a function
 giveOrTakeItem = (name) => {
    var index = this.state.cart.indexOf(name); /*next use for loop to loop through created array to check for already added item. */
  if (index >= 0) {
    this.state.cart.splice(index, 1);
    this.cartNumMinus();
  } else {
    this.state.cart.push(name);
    this.cartNumPlus();
  }
    console.log(this.state.cart); 
  };


  componentDidMount(i){
    axios.get('/api/products')
    .then(response => {
        console.log(response.data)
        this.setState({
            products: response.data
        })
    }).catch((error) => {
        console.log("error", error)
    })
  }

render() {

     const productsArray = this.state.products.map(function(elem,i){
        return (
            <div className="item-container col span">{elem.prod_type} </div>
        )
     });

  
    return(
        <div className="nav-container">
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
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <div id="valID"></div>
              </li>
            </ul>
          </nav>
          
          <div className="image_container wood">  
              <h1>Winter Wear Warehouse</h1>
          </div>

          
      
        <aside> 
          <form name="filterform">
          {/* onSubmit={productSort(event)} */}
            <label>Filter By:
              <select name="filter"> 
                <option value="">Choose One</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </label>
            
      
            <input type="submit" value="Sort"/>
            {/* onSubmit="sort();" */}
          </form>
        </aside>
      
        <section className="item">

        {productsArray}
        


        </section>
        <footer></footer>
        </div>
      
      
    )
}
};

export default FrontPage
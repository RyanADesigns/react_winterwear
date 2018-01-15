import React, {Component} from "react";
import { ToggleButton } from "./components/toggleButton";
import './styles/3cols.css';
import './styles/col.css';
import './styles/page_items.css';
import './styles/reset.css';
import './styles/main.css';


class FrontPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            cart:[],
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

render() {
    return(
        <div className="nav-container">
        <header>
          <div className="top"><img src="images/winterlogo.png" alt="logo png"/>
          </div>
        </header>
        
          <nav>
            <ul>
              <li><a href="#">Hats</a></li>
              <li><a href="#">Gloves</a></li>
              <li><a href="#">Scarves</a></li>
              <li class="cart-info">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <div id="valID"></div>
              </li>
            </ul>
          </nav>
          
          <div class="image_container wood">  
      
          <h1>Winter Wear Warehouse</h1>
          </div>

          
      
        <aside> 
          <form name="filterform" onsubmit="productSort(event)">
            <label>Filter By:
              <select name="filter"> 
                <option value="">Choose One</option>
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </label>
            
      
            <input type="submit" onsubmit="sort();" value="Sort"/>
          </form>
        </aside>
      
        <section>
          <h2>Scarves</h2>
          <div class="col-1-of-3">
        
          <div class="item-container col span_1_of_3">
             <div class="item">
              <img src="images/woolCableknit.jpg" class="item-image" alt="scarf"/> 
               {/* <button onclick="giveOrTakeItem('Wool Cable Knit');">Add/Remove</button> */}
               <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
               <p>Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.</p>
             </div>
          </div>

              <div class="item-container col span_1_of_3">
                <img src="images/twill.jpg" alt="product image"/>
                {/* <button onclick="giveOrTakeItem('Ashby Twill');">Add/Remove</button> */}
                <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
                <p>Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool</p> 
              </div>

              <div class="item-container col span_1_of_3">
                <img src="images/ombre-infinity.jpg" alt="product image"/>
                {/* <button onclick="giveOrTakeItem('Ombre Infinity');">Add/Remove</button> */}
                <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
                <p>A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.</p>
              </div>

          </div>
        </section>
      {/* <!--images 250 wide by 300 tall--> */}
        <section>
          <div class="col-2-of-3">
          <div class="item-container col span_2_of_3">
              <div class="item">
                <img src="images/fringed-plaid.jpeg" class="2nd_row item-image" alt="scarf"/>
                
                {/* <button onclick="giveOrTakeItem('Fringed Plaid');">Add/Remove</button> */}
                <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>   
                <p>
                Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.</p>
              </div>

          </div>
            <div class="item-container col span_2_of_3">
              <img src="images/reversible-plaid.jpg" alt="product image"/>
              
              {/* <button onclick="giveOrTakeItem('Reversible Plaid');">Add/Remove</button> */}
              <ToggleButton/>
              <p>Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.</p>
            </div>
            <div class="item-container col span_2_of_3">
              <img src="images/grey_shredd.jpg" alt="product image"/>
              
              {/* <button onclick="giveOrTakeItem('Grey Shredd');">Add/Remove</button> */}
              <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
              
              <p>The Who What Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic</p>
            </div>
          </div>
        
        </section>
        
        <section>
          <div class="col-3-of-3">
            <div class="item-container col span_3_of_3">

                <div class="item">
                  <img src="images/etro-h300.png" class="3rd_row item-image" alt="scarf"/>
                  
                  {/* <button onclick="giveOrTakeItem('Etro Paisley-Print Silk');">Add/Remove</button> */}
                  <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
                  
                  <p> Luxurious silk scarf with subtle paisley pattern. 100% silk</p>
                </div>
            </div>
                <div class="item-container col span_3_of_3">
                  <img src="images/northern-lights.jpg" alt="product image"/>
                  
                  {/* <button onclick="giveOrTakeItem('Northern Lights');">Add/Remove</button> */}
                  <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
                  
                  <p>Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton</p>
                </div>

                <div class="item-container col span_3_of_3">
                  <img src="images/multi-color.jpeg" alt="product image"/> 
                  
                  {/* <button onclick="giveOrTakeItem('Multi Color');">Add/Remove</button> */}
                  <ToggleButton giveOrTakeItem={this.giveOrTakeItem} name={this.name}/>
                  
                  <p>The Who What  Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic</p>
                </div>
            </div>
        </section>
        <footer></footer>
        </div>
      
      
    )
}
};

export default FrontPage
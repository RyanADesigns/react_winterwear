const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const ctrl = require('./contoller')


const app = express();


app.use(bodyParser.json())

app.use(cors());


massive(process.env.CONNECTION_STRING)
.then(dbInstance => app.set('db', dbInstance));

app.post('/api/users/', ctrl.new_user);
// app.post('/api/users/cart', ctrl.add_to_cart);
// app.get('/api/users/cart', ctrl.get_cart);  
// app.put('/api/users/cart',ctrl.update_quantity); 
// app.delete('/api/users/cart/delete/:id', ctrl.delete); 
app.patch('/api/users/cart/checkout/:id', ctrl.order_update);
app.get('/api/userInfo/:id',ctrl.get_user);
app.get('/api/items/store/:id', ctrl.read_store);
app.get('/api/products', ctrl.get_products);




const port = 3005;


// endpoints go here

app.listen(port, () => console.log('we are listening on port ' + port));



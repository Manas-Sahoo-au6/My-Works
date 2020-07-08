const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/ecommerceOrders',{
  useNewUrlParser: true,
  useUnifiedTopology: true},(err) => {
  if (!err){
    console.log('mongodb connected');
  }else{
    console.log('error : ' + err)
  }
} );

require ('./order.model');
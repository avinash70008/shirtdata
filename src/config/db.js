
 const mongoose=require('mongoose');

 const connectdb=()=>{
 
     return mongoose.connect("mongodb+srv://avinash:avinash1@cluster0.ie7tp.mongodb.net/shirt?retryWrites=true&w=majority");
    
}
 
 module.exports=connectdb;
 
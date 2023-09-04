//import mongoose to create new schema
const mongoose = require('mongoose');



// cretae schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type : String , required : true
    }
})



//export this Schema
const todoItems = mongoose.model( 'todo' , TodoItemSchema);
module.exports = todoItems;

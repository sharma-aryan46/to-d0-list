const router = require('express').Router();

const { request, response } = require('express');
//import todo models
const todoItemsModel = require('../models/todoItems');




// create our first route --add todo item in database
router.post('/api/item', async (request ,response)=>{
    try{
        const newItem = new todoItemsModel({
            item : request.body.item
        })
        //save this item in database
        const saveItem = await newItem.save()
        response.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
})

// create  second route -- get data from database
router.get('/api/items', async (request, response)=>{
    try{
        const alltodoitems = await todoItemsModel.find({});
        response.status(200).json(alltodoitems)
    }catch(err){
        response.json(err);
    }
})

//update item
router.put('/api/item/:id', async(request,response)=>{
    try{
        const updateItem = await todoItemsModel.findByIdAndUpdate(request.params.id,{$set: request.body});
        response.status(200).json('Item Updated');

    }catch(error){
        response.json('error');
    }
})


//lets delete item from database
router.delete('/api/item/:id', async (request, response)=>{
    try{
        //find the item by its id and delete it
        const deleteItem = await todoItemsModel.findByIdAndDelete(request.params.id);
        response.status(200).json('Item Deleted');

       }catch(err){
        response.json(err);
    }
})  




//export
module.exports = router;
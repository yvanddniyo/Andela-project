const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (req, res) => {
    res.send('My Node website')
})
app.get('/blog', (req, res) => {
    res.send('My Blog section')
})

app.get('/products', async(req, res) => {
    try {
    const products = await Product.find({})
    res.status(200).json(products)
} catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete product from the DB
 app.delete('/product/:id', async(req, res) => {
   try {
     const {id} =  req.params;
     const product = await Product.findByIdAndDelete(id)
   } catch (error) {
    res.status(500).json({message: error.message})
    
   }
 })

//get one product from the database
app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        if (!product) {
            res.status(404).json({message: `cannot find any product with ID ${id}`})
           }
        res.status(200).json(product) 
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

// Updating the product in the DB
app.put('/products/:id', async(req, res) => {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body)
    if (!product) {
        res.status(404).json({message: `cannot find any product with ID ${id}`})
       }
    const updatedProduct = await Product.findById(id)
    res.status(200).json(product)
})

 // to save the product in the DB
app.post('/products', async(req, res) => {
    try {
       const product = await Product.create(req.body)
       res.status(200).json(product)
    } catch (error) {
       console.log(error.message)
       res.status(500).json({message: error.message}) 
    }
})

mongoose
.connect('mongodb+srv://andela:andelaYv@andelayv.p2jxntq.mongodb.net/')
.then(() => {
    console.log('Connected successful on the database')
    app.listen(3000, () => {
        console.log('Node API is running at port of 3000');
    })
})
.catch((error) => {
    console.log(error)
})


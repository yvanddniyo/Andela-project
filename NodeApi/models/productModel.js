const mongoose = require('mongoose')

const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        required:[true, 'Please Your product name required']
    },
    quantity: {
        type : Number,
        require:true,
        default:0
    },
    price: {
        type: Number,
        required: true,

    },
    image: {
      type: String,
      required: false
    }
},
{
    timestamps: true
}
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
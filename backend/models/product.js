const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    currency: { type: String },
    imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('product', productSchema);
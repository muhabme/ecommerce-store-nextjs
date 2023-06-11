import { mongoose } from 'mongoose';

const { Schema, model, models } = require('mongoose');

const ProductSchema = new Schema({
    title: { type: String, required: true },
    category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [String] },
    properties: { type: Object },
});

export const Product = models.Product || model('Product', ProductSchema);
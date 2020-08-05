const mongoose = require('mongoose');

const { Schema } = mongoose;

const InventorySchema = new Schema({
    type: {
        type: String,
        required: false,
    },
    features: {
        type: Array,
        required: false
    }
}, { collection: 'inventory' });

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;
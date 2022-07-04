const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    Bio: {
        type: String,
        required: true
    },
   
    
    
},
{timestamps: true}
);
module.exports = mongoose.model('Artist', artistSchema);
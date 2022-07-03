const mangoose = require('mongoose');

const artistSchema = new mangoose.Schema({
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
module.exports = mangoose.model('Artist', artistSchema);
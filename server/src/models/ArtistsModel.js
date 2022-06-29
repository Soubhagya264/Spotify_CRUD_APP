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
    Songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }]
}
);
module.exports = mangoose.model('Artist', artistSchema);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


// Connect to MongoDB

const connectionString = process.env.MONGODB_URI;


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
}
);
const db = mongoose.connection;
module.exports = db;


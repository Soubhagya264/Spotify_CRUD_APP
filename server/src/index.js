const env=require('dotenv').config();
const express=require('express');
const cors=require('cors');
const db=require('./config/db/connection');
const bodyParser=require('body-parser');
const songRoutes=require('./routes/SongRoutes');
const authRoutes=require('./routes/AuthenticationRoute');
const artistRoutes=require('./routes/ArtistRoutes');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

db.on('error',console.error.bind(console,'connection error:'));




app.use('/api/auth',authRoutes);
app.use('/api/songs',songRoutes);
app.use('/api/artists',artistRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
}
);

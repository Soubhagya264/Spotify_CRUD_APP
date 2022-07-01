const express=require('express');
const router=express.Router();
const ArtistController=require('../controllers/ArtistController');

const {createArtist,getArtists,getArtistById,updateArtist,deleteArtist}=ArtistController;

// create route
router.post('/create',createArtist);
// get route
router.get('/getAll',getArtists);
// get route by id
router.get('/get/:id',getArtistById);
// get artist by song
router.get('/getBySong/:id',getArtistBySong);
// update route
router.put('/update/:id',updateArtist);
// delete route
router.delete('/delete/:id',deleteArtist);

module.exports=router;




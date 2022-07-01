const express=require('express');
const router=express.Router();
const SongController=require('../controllers/SongController');
const VerifyTokenAuthorization = require('../middlewares/VerifyTokenAndAuthorization');
const {createSong,getSongs,getSongById,getSongByArtist,updateSong,deleteSong}=SongController;

// create route
router.post('/create',VerifyTokenAuthorization,createSong);
// get route
router.get('/getAll',VerifyTokenAuthorization,getSongs);
// get route by id
router.get('/get/:id',VerifyTokenAuthorization,getSongById);
// get route by artist
router.get('/getByArtist/:id',VerifyTokenAuthorization,getSongByArtist);
// update route
router.put('/update/:id',VerifyTokenAuthorization,updateSong);
// delete route
router.delete('/delete/:id',VerifyTokenAuthorization,deleteSong);

module.exports=router;



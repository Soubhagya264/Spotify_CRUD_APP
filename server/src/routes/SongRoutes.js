const express=require('express');
const router=express.Router();
const SongController=require('../controllers/SongController');
const {createSong,getSongs,getSongById,getSongByArtist,updateSong,deleteSong}=SongController;

// create route
router.post('/create',createSong);
// get route
router.get('/getAll',getSongs);
// get route by id
router.get('/get/:id',getSongById);
// get route by artist
router.get('/getByArtist/:id',getSongByArtist);
// update route
router.put('/update/:id',updateSong);
// delete route
router.delete('/delete/:id',deleteSong);

module.exports=router;



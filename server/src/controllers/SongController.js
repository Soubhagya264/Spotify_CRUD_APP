const Song=require('../models/SongModel');


const createSong=async (req,res)=>{
    const song=new Song(req.body);
    try{
        const newSong=await song.save();
        res.send(newSong);
    }
    catch(err){
        res.send(err);
    }
}
const getSongs=async (req,res)=>{
    try{
        const songs=await Song.find();
        res.send(songs);
    }
    catch(err){
        res.send(err);
    }
}
const getSongById=async (req,res)=>{
    try{
        const song=await Song.findById(req.params.id);
        res.send(song);
    }
    catch(err){
        res.send(err);
    }
}
const getSongByArtist=async (req,res)=>{
    try{
        const song=await Song.find({Artist:req.params.id});
        res.send(song);
    }
    catch(err){
        res.send(err);
    }
}
const updateSong=async (req,res)=>{
    try{
        const song=await Song.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send(song);
    }
    catch(err){
        res.send(err);
    }
}
const deleteSong=async (req,res)=>{
    try{
        const song=await Song.findByIdAndDelete(req.params.id);
        res.send(song);
    }
    catch(err){
        res.send(err);
    }
}
module.exports={createSong,getSongs,getSongById,getSongByArtist,updateSong,deleteSong};
const Song=require('../models/SongsModel');
var fs = require('fs');
var path = require('path');
const dotenv=require('dotenv');
dotenv.config();


      




const createSong=async (req,res)=>{
    console.log(req.body);
    data = req.body;
    data.Cover = {
        data:fs.readFileSync(path.join(__dirname,process.env.UPLOAD_FOLDER+req.file.filename)),
        contentType: "image/jpg"
    }
    const song=new Song(data);
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
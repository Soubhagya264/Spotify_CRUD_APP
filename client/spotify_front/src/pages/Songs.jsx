import React from 'react';
import { Title } from '../style/Footer_Styled';
import { Button,Container, Wrapper, Table, TableHead, TableRow, TableCell, TableBody,Right } from "../style/Song_Styled";
import {FaStar} from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add';
import Ratings from '../components/Ratings';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userRequest,publicRequest } from '../api/requestMethod';


const Songs = () => {
    const [listOfRatings, setListOfRatings] = useState([]);
    const [listOfSongs, setListOfSongs] = useState([]);
    const [artist, setArtist] = useState([]);

   
    

    useEffect(() => {
        const getSongs = async () => {
            try {
                const response = await userRequest.get('/songs/getAll');
                setListOfSongs(response.data);
                console.log(response.data);
                
               
            }
            catch (error) {
                console.log(error);
            }
            
        }
        getSongs();
        
    }
        , []);

        

  

        

    
  return (
    <>
       
        <Container>
        <Title>TOP 10 SONGS</Title>
        <Right>
            <Link to="/addingSong"><Button>
                <AddIcon style={{fontSize:16,paddingRight:4}}></AddIcon>
                Add Songs
            </Button>
            </Link>
        </Right>
            <Wrapper>
             <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ArtWork</TableCell>
                        <TableCell>Song Name</TableCell>
                        <TableCell>Date of release</TableCell>
                        <TableCell>Artist</TableCell>
                        <TableCell>Rating</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    
                    {listOfSongs.map((song,index)=>{
          
                        return(
                            <TableRow key={index}>
                                <TableCell>
                                    <img src={song.artwork} alt="artwork" width="100px" height="100px"/>
                                </TableCell>
                                <TableCell>{song.Name}</TableCell>
                                <TableCell>{song.DateOfRelease}</TableCell>
                                <TableCell>
                                {song.Artist.map((artist,index)=>{
                                    return(
                                        <div key={index}>
                                            {artist.Name}
                                        </div>
                                    )

                                }
                                )}
                                </TableCell>
                                <TableCell>
                                    <Ratings name={song.Name} listOfRatings={listOfRatings}  setlistofRatings={setListOfRatings}/>
                                </TableCell>
                                
                                
                            </TableRow>
                        )
                    }

                    )}
                        

                    </TableBody>
             </Table>

            </Wrapper>
        </Container>

    </>
  );
}








export default Songs;


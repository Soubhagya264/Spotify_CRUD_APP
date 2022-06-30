import React from 'react';
import { Title } from '../style/Footer_Styled';
import { Button,Container, Wrapper, Table, TableHead, TableRow, TableCell, TableBody,Right } from "../style/Song_Styled";
import {FaStar} from 'react-icons/fa';
import AddIcon from '@mui/icons-material/Add';
import Ratings from './Ratings';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Songs = () => {
    const [listOfRatings, setListOfRatings] = useState([]);
    console.log(listOfRatings);
  return (
    <>
       
        <Container>
        <Title>TOP 10 SONGS</Title>
        <Right>
            <Link to="/addingSong"><Button>
                <AddIcon style={{fontSize:16,paddingRight:4}}></AddIcon>
                ADD SONGS
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
                    <TableRow>
                        <TableCell>
                            <img src="https://i.scdn.co/image/ab67616d0000b2737b8f8f8f8f8f8f8f8f8f8f8f8f" alt=""/>
                        </TableCell>
                        <TableCell>
                            <p>The Sign</p>
                        </TableCell>
                        <TableCell>
                            <p>4/4/2020</p>
                        </TableCell>
                        <TableCell>
                            <p>Ace of Base</p>
                        </TableCell>
                        <TableCell>
                            
                      <Ratings name={"song1"} listOfRatings={listOfRatings}  setlistofRatings={setListOfRatings}/>
             
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <img src="https://i.scdn.co/image/ab67616d0000b2737b8f8f8f8f8f8f8f8f8f8f8f8f" alt=""/>
                        </TableCell>
                        <TableCell>
                            <p>The Sign</p>
                        </TableCell>
                        <TableCell>
                            <p>4/4/2020</p>
                        </TableCell>
                        <TableCell>
                            <p>Ace of Base</p>
                        </TableCell>
                        <TableCell>
                        <Ratings name={"song2"} listOfRatings={listOfRatings}  setlistofRatings={setListOfRatings}/>
                        </TableCell>
                    </TableRow>

                    </TableBody>
             </Table>

            </Wrapper>
        </Container>

    </>
  );
}








export default Songs;


import React from 'react';
import { Title } from '../style/Footer_Styled';
import { Button,Container, Wrapper, Table, TableHead, TableRow, TableCell, TableBody,Right } from "../style/Song_Styled";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Songs = () => {
   
  return (
    <>
       
        <Container>
        <Title>TOP 10 ARTIST</Title>
        <Right>
            <Link to="/addArtist"><Button>
                <AddIcon style={{fontSize:16,paddingRight:4}}></AddIcon>
                Add Artist
            </Button>
            </Link>
        </Right>
            <Wrapper>
             <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Artists Name</TableCell>
                        <TableCell>Date of birth</TableCell>
                        <TableCell>Songs</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        
                        <TableCell>
                        <p>Ace of Base</p>
                        </TableCell>
                        <TableCell>
                            <p>4/4/2020</p>
                        </TableCell>
                        <TableCell>
                            Someone you Loved
                        </TableCell>
                
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <p>
                                Post Malone
                            </p>
                        </TableCell>
                        <TableCell>
                            <p>4/4/2020</p>
                        </TableCell>
                        <TableCell>
                            <p>
                            Circles,Rockstar,sunflower
                            </p>
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


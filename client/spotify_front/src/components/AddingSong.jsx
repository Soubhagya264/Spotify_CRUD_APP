import { Title } from "../style/Footer_Styled";
import { Container, Wrapper, FORM,FILED, LABEL, INPUT, BUTTON,BUTTONFILED, SELECT,OPTION,Imagelabel,SELECTFILE } from "../style/AddingSong_styled";
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Link } from "react-router-dom";
import AddArtistModal from "./AddArtistModal";


const AddingSong = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
        <Container >
        {modalOpen ? <AddArtistModal setModalOpen={setModalOpen} modalOpen={modalOpen} /> : <>

        <Title>Adding a new Song</Title>
            <Wrapper>
            <FORM>
                <FILED>
                <LABEL>Song Name</LABEL>
                <INPUT type="text" name="songName" placeholder="Song Name" />
                </FILED>

                <FILED>
                <LABEL>Date Released</LABEL>
                <INPUT type="date" name="dateReleased" placeholder="Date Released" />
                </FILED>
                
                <FILED>
                <LABEL > Artwork</LABEL>
                <Imagelabel for="image" >
                 <ImageIcon style={{fontSize:22,paddingRight:10}}></ImageIcon>
                 <span style={{color:"gray",fontWeight:"bolder"}}>Upload Image</span> 
                <INPUT type="file" name="artwork" id="image" style={{display:"none"}} />
                </Imagelabel>
                </FILED>

                <SELECTFILE>
                <LABEL>Artist</LABEL>
                <SELECT>
                    <OPTION>Ace of Base</OPTION>
                    <OPTION>The Beatles</OPTION>
                    <OPTION>The Rolling Stones</OPTION>
                    <OPTION>The Who</OPTION>
                    <OPTION>The Doors</OPTION>
                </SELECT>
                <BUTTON style={{position:"relative",zIndex:1}}
                onClick={() => setModalOpen(true)}
                ><AddIcon  style={{fontSize:16,paddingRight:4}}/>Add Artists</BUTTON>
                </SELECTFILE>
                

                
                <BUTTONFILED>
                <BUTTON>Cancel</BUTTON>
                <BUTTON>Save</BUTTON>
                </BUTTONFILED>

            </FORM>
            </Wrapper>
          
        </>}

       

        
        

        
        </Container>
    </>
  );
}

export default AddingSong;

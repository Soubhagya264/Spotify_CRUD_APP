import { Title } from "../style/Footer_Styled";
import { Container, Wrapper, FORM, FIELD, LABEL, INPUT, BUTTON, BUTTONFILED, Imagelabel, SELECTFILE, LEFT, RIGHT, CENTER } from "../style/AddingSong_styled";
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Link } from "react-router-dom";
import AddArtistModal from "./AddArtistModal";
import Multiselect from "multiselect-react-dropdown";


const AddingSong = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);
  const [ArtistList, setArtistList] = useState([
    "Ace of Base",
    "The Beatles",
    "The Rolling Stones",
    "The Who",
    "The Doors",
    "The Beach"
  ]);
  return (
    <>
      <Container >
        {modalOpen && <AddArtistModal setModalOpen={setModalOpen} modalOpen={modalOpen} />}


        <>
          <Title>Adding a new Song</Title>
          <Wrapper>
            <FORM>
              <FIELD>
                <LEFT>
                  <LABEL>Song Name</LABEL>
                </LEFT>
                <CENTER>
                  <INPUT type="text" name="songName" placeholder="Song Name" />
                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>

              <FIELD>
                <LEFT>
                  <LABEL>Date Released</LABEL>
                </LEFT>
                <CENTER>
                  <INPUT type="date" name="dateReleased" placeholder="Date Released" />
                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>

              <FIELD>
                <LEFT>
                  <LABEL > Artwork</LABEL>
                </LEFT>
                <CENTER>
                  <Imagelabel for="image" >
                    <ImageIcon style={{ fontSize: 22, paddingRight: 10 }}></ImageIcon>
                    <span style={{ color: "gray", fontWeight: "bolder" }}>Upload Image</span>
                    <INPUT type="file" name="artwork" id="image" style={{ display: "none" }} />
                  </Imagelabel>
                </CENTER>
                <RIGHT>
                </RIGHT>
              </FIELD>


              <SELECTFILE>
                <LEFT>
                  <LABEL>Artist</LABEL>
                </LEFT>

                <CENTER >
                <Multiselect 
                    options={ArtistList}
                    isObject={false}
                    
                    displayValue="none"
                    showCheckbox={true}
                  />
                </CENTER>

                <RIGHT>
                 <Link to="/addArtistModal"><BUTTON

                    onClick={
                      (e) => {
                        e.preventDefault();
                        setModalOpen(true)
                      }
                    }

                  ><AddIcon style={{ fontSize: 16, paddingRight: 4 }} />Add Artists</BUTTON>
                  </Link> 
                </RIGHT>

              </SELECTFILE>



              <BUTTONFILED>
                <BUTTON>Cancel</BUTTON>
                <BUTTON>Save</BUTTON>
              </BUTTONFILED>

            </FORM>
          </Wrapper>


        </>
      </Container>
    </>
  );
}

export default AddingSong;

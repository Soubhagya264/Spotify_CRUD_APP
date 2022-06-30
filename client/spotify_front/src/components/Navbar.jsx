import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Container, Wrapper, Left, Center, Right, Logo,SearchContainer, Input, MenuItem } from "../style/Navbar_Styled";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    
                    <Link to="/" style={{textDecoration:"none"}}><MenuItem style={{backgroundColor:"white",color:"black"}}>HOME </MenuItem></Link>  
                </Left>
                <Center>
                    <Logo>SpotifyClone</Logo>
                </Center>
                <Right>
                
                   <MenuItem>REGISTER </MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <SearchContainer>
                    <Input placeholder="search"></Input>
                        <SearchIcon style={{color:"black",fontSize:20,paddingRight:5,cursor:"pointer"}} />
                    </SearchContainer>
                    
                   
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;

import styled from "styled-components"

export const Container = styled.div`
width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
url('https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
align-items:center;
justify-content:center;

`   
export const Wrapper = styled.div`
 padding:20px;
 width:30%;
 background-color:white;

`
export const Form = styled.form`
display:flex;

flex-direction:column;

`
export const Input = styled.input`
flex:1;
margin:10px 0px;
padding:5px;
border-radius:5px;
font-size:20px;
font-weight:200;


`
export const Button = styled.button`

width:25%;
padding:5px;
border:none;
border-radius:5px;
background-color:green;
color:white;
font-weight:300;
font-size:16px;
cursor:pointer;

&:hover{
    background-color:white;
    color:green;
    transition:0.5s;
    border:1px solid green;
}

`
export const Title = styled.h3`
font-size:30px;
font-weight:200;


`
export const Link = styled.a`
color:green;
margin:5px 0px;
font-size:13px;
font-weight:200;
text-decoration:underline;
&:hover{
    color:blue;
    transition:0.5s;
    text-decoration:none;
    cursor:pointer;
}
`
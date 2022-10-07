import React from 'react'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
export default function Header(props) {
  const navigate=useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div>
       <img src="https://raw.githubusercontent.com/koolkishan/netflix-clone-react-node/master/netflix-ui/src/assets/logo.png" height="100px" width="180px">
       </img>
      </div>
     
     <button onClick={()=>navigate(props.login?"/login" :"/signup")}>
      {props.login ?"log In ":"Sign In"}
     </button>
     
    </Container>
  )
}
const Container=styled.div`
display:flex;
padding:5px;
margin-bottom:0;
height:0px;
justify-content:space-between;
img{
  height:5rem;
}
button{
  height:25px;
  padding:2px;
  margin-top:20px;
  margin-right:50px;
  background-color:red;
  border:none;
  cursor:pointer;
  color:white;
  border-radius:10px;
  font-weight:bolder;
  font-size:1.05rem;
}`;

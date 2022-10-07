import React from 'react'
import styled from 'styled-components';
export default function BackgroundImage() {
  return (
    <container height="100px" width="750%">
    <img src='https://raw.githubusercontent.com/koolkishan/netflix-clone-react-node/master/netflix-ui/src/assets/login.jpg' height="750px" width="100%"></img>
    </container>
  );
}
const container = styled.div`
margin-top:0;
margin-left:0;`;

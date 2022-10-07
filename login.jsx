import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import BackgroundImage from "../components/BackgroundImage";
import {firebaseAuth} from "../utils/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Header from "../components/Header";
import { Navigate } from 'react-router-dom';
export default function Signup() {
  
  const [showPassword,setShowPassword]= useState(false);
  const navigate =useNavigate();
  const[signupinputvalues,setsignupinputvalues]= useState({
    email:"",
    password:"",
  });
  const handleSignIn = async()=>{
    try{
      const{email,password}=signupinputvalues;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    }catch(err){
      console.log(err);
    }
  };
  onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
    if(CurrentUser) navigate("/");
  });
  return (
    <Container showPassword={showPassword}>
      <BackgroundImage/>
      <div className="content">
      <Header/>
      <div className="signup-text">
        <div className='signup-text-content'>
          <h1>Unlimited movies,Tv  </h1><h1 className='h1-2'>shows and more.</h1>
          <h4>watch anywhere.Cancel anytime.</h4>
          
        </div>
        <h5>Ready to watch? Enter your Email to create and restart your membership. </h5>
        <div className='signupinput'>
        
          <input type="Email"  placeholder='Email Adress' name="email" values={signupinputvalues.email} on onChange={(e)=>setsignupinputvalues({...signupinputvalues,[e.target.name]:e.target.value})}/>
          {showPassword && (
          <input type="password" placeholder='Password' name="password"values={signupinputvalues.password} on onChange={(e)=>setsignupinputvalues({...signupinputvalues,[e.target.name]:e.target.value})}/>)}
          {!showPassword &&(
          <button className="getstarted" onClick={()=>setShowPassword(true)} >Get started</button>)}
        </div>
        <button  className="login-button" onClick={handleSignIn}>SignIn</button>
      </div>
     </div>
    </Container>
  );
}

const Container=styled.div`
position:relative;
.content{
  color:white;
  margin:0;
  position:absolute;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.5);
  height:750px;
  width:100%;
  display:grid;
  ${'' /* grid-template-rows:8vh,10vh; */}
}
.signup-text{
  
  height:auto;
  margin-top:0;
${'' /* border:2px black solid; */}
}

.signup-text-content{
  ${'' /* border:2px black solid; */}
  margin-left:400px;
  width:auto;
  font-size:25px;
  padding:0;
  
  
  margin-top:0;
}
.signup-text-content h4{
font-size:25px;
text-indent:30px;
  margin-bottom:0;
  margin-top:10px;

}
h1{
  margin:0 0 0 0;
}
.h1-2{
  text-indent:30px;
}

h5{
  text-indent:10px;
  font-size:22px;
  margin-left:300px;
}
.signupinput{
  margin-left:350px;
  width:auto;
}
.signupinput input{
  width:300px;
  height:40px;
}
.getstarted{
  width:300px;
}
button{background-color:red;
width:100px;
color:white;
height:50px;
}
.login-button{
  margin-left:450px;
  color:white;
  width:450px;
  height:40px;


}
`;

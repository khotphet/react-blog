import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from "styled-components"


const MainContainer = styled.header `

  background-image: url("https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg") ;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 1000px;
  height: 400px;
`;


const Hello = ()=> {
    return(
   <MainContainer>
      <h1>ป๋าเอ็ก</h1>
    </MainContainer>
  
    )
  }



export default Hello;

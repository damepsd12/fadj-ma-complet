"use client"; 
import React from 'react';
import styled from 'styled-components';

export const Main =styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #EDF1F5!important; 
  

   @media (max-width: 768px) {
     display: flex!important;
     flex-direction: column-reverse;
     width: 100%;
     padding: 0px;
     margin: 0px;
  }
`;
export const Asidebar= styled.div`
   background-color: #EDF1F5!important; 
   box-sizing: border-box;
   width: 80%;
   height: 100%;
   position: absolute;
   right: 0;
   left: 45vh;

   @media (max-width: 768px) {
    display: block;
    width: 100%;
    left: 0px;
    position: relative;
  }
`;
export const Left = styled.div`
   width: 20%;
   height: 100%;
   position: fixed;
   z-index: 10;

    @media (max-width: 768px) {
      width: 100%;  //Le Sidebar devient un footer en mobile
      height: auto; // Le footer ne prend pas 100vh
      position: fixed;
      height: 90px;
      display: block;
      bottom: 0;
    }
  //   @media (max-width: 768px) {
  //   display: block;
  //   position: relative;
  // }
`;
export const Row = styled.div`

`;
export const Nav = styled.nav`

`;
export const Ul = styled.ul`

`;
export const Link = styled.link`

`;
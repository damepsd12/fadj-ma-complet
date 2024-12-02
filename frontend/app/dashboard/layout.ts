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
    display: inline-block;
    width: 100%;
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
    position: absolute;
    right: 0;
    left: 0vh;
  }
`;
export const Left = styled.div`
   width: 20%;
   height: 100%;
   position: fixed;
   z-index: 10;


    @media (max-width: 768px) {
    display: none;
  }
`;
export const Row = styled.div`

`;
export const Nav = styled.nav`

`;
export const Ul = styled.ul`

`;
export const Link = styled.link`

`;
"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client
import React from 'react';
import styled from 'styled-components';
import DashboardLayout  from "./dashboard/layout";
import ProductPage from './dashboard/page';

// const Container = styled.div`
//   display: grid;
//   grid-template-areas: 
//     "navbar navbar"
//     "sidebar main";
//   grid-template-columns: 200px 1fr;
//   height: 100vh;

//    @media (max-width: 768px) {
//     display: none;
//   }
// `;
const DashboardLayout = styled.div`
  padding: 0px;
  margin: 0px;
`
const Main = styled.div`
  grid-area: main;
  padding: 0px;
  backgroundColor: '#000';

   @media (max-width: 768px) {
    display: none!important;
  }
`;

const App = () => (
  <DashboardLayout>
    <Main  style={{ backgroundColor: '#EDF1F5' }}>
      <ProductPage />
    </Main>
  </DashboardLayout>
   
);

export default App;
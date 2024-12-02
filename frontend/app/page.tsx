"use client"; // Ajoutez cette ligne pour indiquer que c'est un composant client
import React from 'react';
import styled from 'styled-components';
import DashboardLayout from './dashboard/layout';
import ProductPage from './dashboard/page'

const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "navbar navbar"
    "sidebar main";
  grid-template-columns: 200px 1fr;
  height: 100vh;

   @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.div`
  grid-area: main;
  padding: 20px;
  backgroundColor: '#EDF1F5';

   @media (max-width: 768px) {
    display: none;
  }
`;

const App = () => (
  <DashboardLayout>

    <Main style={{ backgroundColor: '#EDF1F5' }}>
      <ProductPage />
    </Main>
  </DashboardLayout>
);

export default App;
"use client";
import React from 'react';
import styled from 'styled-components';
import './layout.ts';
import { Main, Asidebar, Left } from './layout.ts';
import Navbar from '../components/iu/navbar/navbar.tsx';
import Sidebar from '../components/iu/sidebar/sidebar.tsx';

const DashboardLayout = ({children}) => {
  return (
    <Main style={{ backgroundColor: '#EDF1F5' }}>
      <Left>
          <Sidebar/>
      </Left>
       <Asidebar>
            <Navbar/>
            {children} 
       </Asidebar>
    </Main>
  )
}

export default DashboardLayout;

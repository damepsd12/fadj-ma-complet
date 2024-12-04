"use client";
import React from 'react';
import { Main, Asidebar, Left } from './layout.ts';
import Navbar from '../components/iu/navbar/navbar.tsx';
import Sidebar from '../components/iu/sidebar/sidebar.tsx';

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  
  return (
    <Main>
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

// export default DashboardLayout;

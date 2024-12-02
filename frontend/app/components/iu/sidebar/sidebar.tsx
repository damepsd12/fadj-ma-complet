"use client"; 
import React from 'react';
import styled from 'styled-components';
import './sidebar.ts';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Fadjma from '../public/fadjma.jpg';
import { FaEllipsisV } from 'react-icons/fa';
import { BsGrid1X2 } from "react-icons/bs";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiMedicalCase } from "react-icons/ci";
import { PiCopyrightLight } from "react-icons/pi";
import { Container} from './sidebar.ts';
import { usePathname } from 'next/navigation';

// Créer le composant Container


const Admin = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 4px;
   justify-content: space-between;
   box-sizing: border-box;
   margin-bottom: 30px;
`;
const Adminpro = styled.div`
     display: flex;
     align-items: center;
     justify-content: start;
     padding: 0px 0px;
`
const Profil = styled.div`
    border-radius: 50%;
     color: white;
`;
const Name = styled.div`
     text-align: start;
     margin-left: 20px;
     
     span{
     font-size: 16px;
     text-decoration: none;
     color: white;
    }
    

`;
const Icon = styled.div`
      font-size: 14px;
`;
const P1 = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
`;
const P = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: #DABB0B;
`;
const StyledImage = styled(Image)`
    width: 4Opx;
    height: 40px;
    border-radius: 50%
`;
const Ul = styled.ul`
    display: inline-block;
    padding: 0px;
    margin: 0px;
    margin-bottom: 35vh;
    text-align: start;
`;
// Créer le composant Navbar
const Navbar = styled.nav`
  padding: 10px 0px 10px 0px;
  color: white;
  display: inline-block;
  text-align: start;
`;
const Li = styled.li`
    list-style: none;
    margin-bottom: 20px;
    text-align: start;
    width: 100%;

    transition: all 0.3s ease;

  &.active {
    background-color: #009099; 
    color: white;
    width: 100%;
    padding: 10px 50.95px;
  }

  &.active .icon {
    color: #4A4E52;
  }

  &.active .text {
    color: #4A4E52; 
    font-weight: bold;
  }
`;

const Footer = styled.p`
    font-size: 12px;
`
const Sidebar = () => {
    const pathname = usePathname();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true); // Assure que le composant s'exécute côté client
    }, []);
  
    if (!isClient) return null; // Empêche le rendu côté serveur
  return (
    <Container>
        <Admin>
            <Adminpro>
                <Profil>
                    <StyledImage src="/fadjma.jpg" width={40}  height={40}  alt='profil'/>
                </Profil>
                <Name>
                    <P1>Modou Fall</P1>
                    <P>Administrateur</P>
                </Name>
            </Adminpro>
            <Icon>
               <FaEllipsisV size={16}/>
            </Icon>
        </Admin>
      <Navbar>
           <Ul>
               <Li className={pathname === '/dashboard' ? 'active' : ''}>
                  <Link href="/dashboard" passHref style={{ textDecoration:'none' }}>
                        <Adminpro>
                            <Profil>
                               <BsGrid1X2 />
                            </Profil>
                            <Name>
                            <span>Tableau de bord</span>
                            </Name>
                        </Adminpro>
                  </Link>
               </Li>
               <Li  className={pathname === '/dashboard/produits' ? 'active' : ''}>
                  <Link href="/dashboard/produits" passHref style={{ textDecoration:'none' }}>
                    <Adminpro>
                        <Profil>
                            <CiMedicalCase />
                        </Profil>
                        <Name>
                            <span>Médicaments</span>
                        </Name>
                    </Adminpro>
                  </Link>
              </Li>
           </Ul>
            <Link  href="/login" passHref style={{ textDecoration:'none' }}>
                <Adminpro>
                    <Profil>
                        <LuCornerUpLeft />
                    </Profil>
                    <Name>
                        <span>Deconnexion</span>
                    </Name>
                </Adminpro>
            </Link>
      </Navbar>
      <Footer>
           Propulsé par red team <PiCopyrightLight />2024 version 1.1.2
      </Footer>
    </Container>
  );
};

export default Sidebar;


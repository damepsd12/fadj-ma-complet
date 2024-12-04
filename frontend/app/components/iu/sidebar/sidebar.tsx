"use client"; 
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { FaEllipsisV } from 'react-icons/fa';
import { BsGrid1X2 } from "react-icons/bs";
import { LuCornerUpLeft } from "react-icons/lu";
import { CiMedicalCase } from "react-icons/ci";
import { PiCopyrightLight } from "react-icons/pi";
import { usePathname } from 'next/navigation';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #283342;
    padding: 20vh 0px 10px 0px;
    color: #FFF;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;
const Admin = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        display: none;
    }
`;
const Adminpro = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 20px;

`;
const Profil = styled.div`
    border-radius: 50%;
    color: white;
`;
const Name = styled.div`
    margin-left: 20px;
    span {
        font-size: 16px;
        color: white;
    }
`;
const Icon = styled.div`
    font-size: 14px;
    color: white;
    margin-right: 15px;
`;
const P1 = styled.p`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 9px;
`;
const P = styled.p`
    font-size: 11px;
    font-weight: 400;
    color: #DABB0B;

    @media (max-width: 768px) {
        color: #fff;
        margin-bottom: 30px!important;
    }
    @media (max-width: 324px) {
       color: #fff;
       margin-bottom: 30px!important;
    }
`;
const StyledImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;
const Navbar = styled.nav`
    padding: 10px 0;
    color: white;

    @media (max-width: 768px) {
        display: none;
    }
`;
const Ul = styled.ul`
    padding: 0;
    margin: 0;
    margin-bottom: 30vh;
    text-align: start;
`;
const Li = styled.li`
    list-style: none;
    margin-bottom: 10px;
    width: 100%;
    
    &.active {
        background-color: #009099; 
        padding: 0px; 
        border-radius: 2px;
    }
`;
const Span = styled.span`
    font-size: 16px;
    color: white;
`;
const Footer = styled.p`
    font-size: 12px;
    text-align: center; 
    margin-top: auto; 
    display: inline-block;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
        padding-bottom: 20px!important;
    }
`;
const FooterItem = styled.div`
    display: inline-block;
    align-items: center;
`
const MobileIcons = styled.div`
    display: none; 

    @media (max-width: 768px) {
        display: block;
        display: flex;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        color: white!important;
        color: #000;
        gap: 15px;
        width: 100%;
        align-items: center;
        font-size: 20px!important;
        padding: 20px;
    }
`;

interface SidebarProps {
    onSelect: (title: string) => void;
}
    
const Sidebar = ({ onSelect }: SidebarProps) => {
    const pathname = usePathname();
    const [isClient, setIsClient] = useState(false);

    const menuItems = [
        {
            title: 'Tableau de bord',
            icon: <BsGrid1X2 />,
            path: '/dashboard',
        },
        {
            title: 'Médicaments',
            icon: <CiMedicalCase />,
            path: '/dashboard/produits',
        },
    ];

    useEffect(() => {
        setIsClient(true); 
    }, []);
  
    if (!isClient) return null; // Empêche le rendu côté serveur

    return (
        <Container>
            <Admin>
                <Adminpro>
                    <Profil>
                        <StyledImage src="/fadjma.jpg" width={40} height={40} alt='profil'/>
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
                    {menuItems.map(({ title, icon, path }) => (
                        <Li key={title} className={pathname === path ? 'active' : ''}>
                            <Link href={path}  style={{ textDecoration:'none' }}>
                                <Adminpro onClick={() => onSelect(title)}>
                                    <Icon className="icon">{icon}</Icon>
                                    <Span className="text">{title}</Span>
                                </Adminpro>
                            </Link>
                        </Li>
                    ))}
                </Ul>
                <Link href="/login" passHref style={{ textDecoration:'none' }}>
                    <Adminpro>
                        <Profil>
                            <LuCornerUpLeft />
                        </Profil>
                        <Name>
                            <span>Déconnexion</span>
                        </Name>
                    </Adminpro>
                </Link>
            </Navbar>
            
            <Footer>
                 <FooterItem style={{ paddingBottom:'0px' }}> 
                    <MobileIcons style={{ color:'#FFF' }}>
                        {menuItems.map(({ title, icon, path }) => (
                            <Link key={title} href={path} style={{ color:'#FFF', fontSize: '20px' }}>
                                {React.cloneElement(icon, {
                                    className: pathname === path ? 'active' : '',
                                })}
                            </Link>
                        ))}
                        <Link href="/login" passHref style={{ textDecoration:'none' }}>
                            <Profil>
                                <LuCornerUpLeft />
                            </Profil>
                        </Link>
                    </MobileIcons>
                    <P>Propulsé par Red Team <PiCopyrightLight /> 2024 version 1.1.2</P>
                 </FooterItem>
            </Footer>
        </Container>
    );
};

export default Sidebar;

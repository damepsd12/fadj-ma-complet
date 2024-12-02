"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "./formulaire";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import  MediCard from "./productcard";  
import DetailsPage from "./detail/page";

// Styles pour ListePage
const Medipage = styled.div`
  padding: 75px 40px 100vh 30px;
  background-color: #EDF1F5;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 30px;
  }
    @media (max-width: 320px) {
     padding: 75px 15px 100vh 15px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: inline-block;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 20px;
    width: 100%;

    
    @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    max-width: 100%;
  }
    @media (max-width: 320px) {
    flex-direction: column;
    width: 100%;
    align-items: start;

  }
`;
const Box = styled.div`
    @media (max-width: 320px) {
     justify-content: start;
     text-align: start;
     align-items: start;
  }
`;

const P = styled.p`
`
const H1 = styled.h2`
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  padding: 8px 18px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 360px;
  outline: none;

  @media (max-width: 320px) {
    width: 290px;
    font-size: 12px;
  }
`;

const SearchIcon = styled(IoSearchSharp)`
  position: absolute; 
  right: 10px; 
  top: 50%; 
  transform: translateY(-50%);
  color: #000; 
  cursor: pointer; 
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SelectButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const groups = [
  'Antibiotiques',
  'Antihypertenseurs',
  'Diabètes',
  'Maladies cardiovasculaires',
  'Produits à base de plantes',
  'Crèmes et pommade cutanées',
  'Gels et sprays anti-inflammatoires',
];


// Composant ListePage
const MedicamentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleGroupSelect = (group: string) => {
    setSelectedGroup(group);
    setDropdownOpen(false);
  };

  // Récupérer tous les produits lorsque le composant est monté
  useEffect(() => {
    fetch("http://localhost:5000/products")  // L'URL de votre API backend
      .then(response => response.json())
      .then(data => {
        setProducts(data);  // Mettre à jour l'état avec les produits récupérés
      })
      .catch(error => console.error("Erreur lors de la récupération des produits :", error));
  }, []);

  // Ajouter un nouvel produtl à la liste
  const addProduct = (data: any) => {
    setProducts((prev) => [...prev, data]);
  };

  return (
    <Medipage>
      <Container>
        <Row>
          <Box>
            <H1>Médicaments({products.length})</H1>
             <P>Liste des médicaments disponibles à la vente</P>
          </Box>
          <Box>
             <Button onClick={() => setModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                width="20px"
                height="20px"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Nouveau médicament
            </Button>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={addProduct} />
          </Box>
        </Row>
        <Row>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Rechercher dans l'inventaire médicaments."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <SearchIcon />
          </SearchContainer>
          <DropdownContainer>
            <MdOutlineFilterAlt style={{ marginRight: "5px" }} size={29} />
            <SelectButton onClick={() => setDropdownOpen(!isDropdownOpen)}>
              {selectedGroup || 'Sélectionner un groupe'} <RiArrowDropDownLine style={{ marginLeft: "5px" }} size={29} />
            </SelectButton>
            {isDropdownOpen && (
              <DropdownList>
                {groups.map((group) => (
                  <DropdownItem key={group} onClick={() => handleGroupSelect(group)}>
                    {group}
                  </DropdownItem>
                ))}
              </DropdownList>
            )}
          </DropdownContainer>
        </Row>
        {/* Liste des hôtels */}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {products.length === 0 ? (
            <p style={{ display: 'none'}}>Aucun médicament disponible.</p>
          ) : (
            products.map((product: any) => (
              < MediCard
                key={product._id}
                name={product.name}
                description={product.description}
                dosage={product.Dosage}
                price={product.pricet}
                currency={product.currency}
                imageUrl={product.imageUrl}
              />
            ))
          )}
        </div>
      </Container>
    </Medipage>
  );
};

export default MedicamentPage;
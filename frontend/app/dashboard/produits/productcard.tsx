
import { FiChevronsRight } from "react-icons/fi";
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface MediProps {
  name: string;
  description: string;
  dosage: string;
  price: number;
  currency: string;
  imageUrl?: string; // L'image est optionnelle
}

const Container = styled.div`
  padding: 0px;
  backgroundColor: '#fff';
  width: 100%;
`;

const Table = styled.table`
 background-color: #fff;
  width: 100%;
  border-radius: 5px;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 8px 18px;
  color: #000;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 5px;
  }
`;

const MediCard: React.FC<MediProps> = ({
  name,
  description,
  dosage,
  price,
  currency,
}) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <Th>Nom du Médicament</Th>
            <Th>Id du Médicament</Th>
            <Th>Nom du groupe</Th>
            <Th>Stock en Quantité</Th>
            <Th>Action</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>{name}</Td>
            <Td>{description}</Td>
            <Td>{dosage}</Td>
            <Td>{`${price} ${currency}`}</Td>
            <Td>
              <Link href="/dashboard/produits/detail" style={{ textDecoration: 'none' }} passHref>
                  <Button style={{ border: 'none', backgroundColor: "#fff"}}>Voir tous les Détails <FiChevronsRight style={{ marginLeft: '20px' }} /></Button>
              </Link>
            </Td>
          </tr>
        </tbody>
      </Table>
      
    </Container>
  );
};

export default MediCard;
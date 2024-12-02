'use client';
import styled from 'styled-components';

// Styled components
export const ProductageContainer = styled.div`
  display: flex;
  background-color: #EDF1F5;
  flex-direction: column;
  padding: 70px 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 0px;


  @media (max-width: 768px) {
    padding: 60px 20px 20px 20px;
    margin-top: 0px;
  }
`;

export const Button = styled.a`
      padding: 12px 15px;
      background-color: #FFF;
      color: #000;
      text-decoration: none;
      border: 1px solid #000;
      border-radius: 5px;
    
      &:hover {
          background-color: #283342;
          color: white;
          border: none;
  ;
}
`;

export const ProductageRow = styled.div`
    display: flex;
    justify-content: space-between; 
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    display-flex: row;
    gap: 20px;
    margin: 10px 0px 20px 0px; 
   
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 10px;
  };

  @media (max-width: 320px) {
    display: inline-block; 
    width: 100%;
    padding: 0px;
  }
    
    
`;
export const ProductageBox = styled.div`
    text-align: start;

  @media (max-width: 320px) {
    display: block; 
    width: 100%;
    margin-bottom: 30px;
    justify-content: start;
  }
`;
export const ButtonContainer = styled.div`
      margin-left: 20px;


  @media (max-width: 320px) {
    margin-bottom: 20px;
    margin-left: 0px;
  }
`;
// LA FUNCTION MAPPING START

export const Flex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
  width: 100%; 

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px; 
  }
    @media (max-width: 320px) {
    width: 100%; 
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const IconWrapper = styled.div<{ bgColor?: string }>`
  align-items: center;
  font-size: 26px;
   font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  display: inline-block;
  padding: 8px;
  text-align: center;

  h2 {
    font-size: 16px;
    font-weight: bold;
    margin: 5px;
    color: #333;
  }

  p {
    font-size: 10px;
    color: #777;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 16px;
    }
    div{
      font-size: 12px;
    }
  }
`;
export const Box = styled.div<{ borderColor?: string }>`
  padding: 10px 0px 0px 0px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  align-items: center;
  border: 2px solid ${({ borderColor }) => borderColor || 'transparent'};

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 320px) {
    width: 100%; 
  }
`;

export const Description = styled.div<{ bgColor?: string }>`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor || 'transparent'}; 
  padding: 8px; 

  p {
    display: flex;
    text-align: center;
    margin: 0px;
  }
  @media (max-width: 320px) {
        text-align: center;
        justify-content: center;

     
  }
  @media(max-width: 768px) {
    p{ 
      font-size: 14px;
    };
    
  }
`;
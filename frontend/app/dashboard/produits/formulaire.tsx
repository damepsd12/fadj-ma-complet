"use client";
import { useState } from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

// Types pour les props du Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

// Styles pour le Modal
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  padding: 0px 30px;
  font-size: 20px;
  position: relative;
  top: 10px;

  h2 {
    font-size: 15px;
    margin-top: -3px;
  }
`;

const Tete = styled.div`
  width: 80px;
  height: 80px; 
  background-color: #d9d9d9;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin: 40px auto 0;
  border-radius: 50%;
  margin: auto;
`;

const Form = styled.form`
  padding: 0px 0px 40px 0px;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  padding: 0px 30px;
  gap: 20px;
  width: 100%;

  @media (max-width: 320px) {
    display: inline-block;
    width: 100%;
  }
`;

const FormGroup = styled.div`
  flex: 1; 
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 600; 
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  outline: none;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 15px; 
  color: #000;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
  font-size: 16px;
  width: 43%;
  font-weight: 700;

  &:hover {
    background-color: ;
  }
    @media (max-width: 320px) {
    display: inline-block;
    width: 37%;
  }
    
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  box-sizing: border-box;
  justify-content: center;
`;

const ModalHeader = styled.div`
  width: 100%;
  padding: 10px 10px 20px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
  margin: 0px auto;
  background-color: #edf1f5;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ImagePreviewContainer = styled.div`
  display: inline-block; 
  margin-top: 10px;
  margin-left: 10px; 
`;

const ImagePreview = styled.img`
  max-width: 100%;
  max-height: 200px; 
  object-fit: cover; 
  border-radius: 15px;
  margin-right: 10px; 
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    name: "",
    description: "",
    dosage: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <ModalHeader>
            <label htmlFor="image-upload">
              <Tete>
                <FaPlus size={30} />
              </Tete>
              {formData.imageUrl ? (
                <ImagePreviewContainer>
                  <ImagePreview src={formData.imageUrl} alt="Prévisualisation" />
                  <Button type="button" onClick={handleDeleteImage}>
                    Supprimer l'image
                  </Button>
                </ImagePreviewContainer>
              ) : (
                <h2>Ajouter une image</h2>
              )}
            </label>
            <Input
              type="file"
              id="image-upload"
              style={{ display: 'none' }} 
              accept="image/*"
              onChange={handleImageChange}
            />
          </ModalHeader>
          <Title>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>Obligatoire</p>
            <p style={{ marginBottom: "40px", color: "#ccc", fontSize: "12px" }}>Donnez plus de détails possible</p>
          </Title>
          <Row>
            <FormGroup>
              <Label htmlFor="name">Nom du médicament:</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nom du medicament"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                type="text"
                name="dosage"
                id="dosage"
                placeholder="Dosage"
                value={formData.dosage}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="price">Prix</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Prix"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <ButtonGroup>
            <Button type="button" onClick={onClose} style={{backgroundColor: "#FFF", border: "1px solid #CCC"}}>
              Annuler
            </Button>
            <Button type="submit" style={{backgroundColor: "#A7DBF5", border: "none"}}>Enregistrer</Button>
          </ButtonGroup>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

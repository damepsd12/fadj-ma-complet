"use client"; 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Fadjmalogo from '../public/fadjmalogo.png';
import styled from 'styled-components';
import axios from 'axios';
import { useRouter } from 'next/navigation';

// Styled Components
const Container = styled.div`
   width: 100%;
   padding: 0px;
   margin: 0px;
   background-color: #EDF1F5;
`;

const Row = styled.div`
   text-align: center;
   background-color: #1D242E;
   color: white;
   padding: 10px 0px 0px 10px;
`;

const H1 = styled.h1`
    line-height: 40px;
    margin-bottom: 0px;
`;

const Logo = styled.div`
    font-size: 20px;
    font-weight: 700;
    line-height: 16px;
`;

const SectionLogo = styled.div`
  align-items: center;
  display: flex;
  margin: 0px auto;
  justify-content: start;
  width: 20%;
  color: white;
  padding: 10px; 
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding: 40px 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  max-width: 600px;
  padding: 0px 20px; 
`;

const Input = styled.input`
  margin: 10px 0px;
  outline: none;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  width: 100%;
`;

const Select = styled.select`
  margin: 10px 0px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
`;

const Label = styled.label`
  margin: 5px 0;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Permet de passer à la ligne si l'espace est insuffisant
  gap: 2rem;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 200px; // Assure une largeur minimale
`;

const RadioContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 15px 70px;
  border: none;
  border-radius: 10px;
  background-color: #A7DBF5;
  font-weight: 700;
  color: #000;
  width: 100%;
  cursor: pointer;
`;

const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConnectSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  gap: 20px;
`;

const ConnexionButton = styled.button`
  cursor: pointer;
  background: #A7DBF5;
  border: 1px solid #CCC;
  color: #0070f3;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
`;

const InscriptionButton = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid #CCC;
  padding: 10px;
  color: #0070f3;
  font-weight: bold;
  border-radius: 10px;
`;

const DateSelectContainer = styled.div`
  flex: 1;
  margin: 0 5px;
`;

const Inscon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 10px;
    margin: auto;
    margin-bottom: 20px;
    box-sizing: border-box;
    border-radius: 10px;
`;

const SignupForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:7000/register', { firstName, lastName, email, password, confirmPassword })
            .then(result => {
                console.log(result);
                router.push('/login');
            })
            .catch(err => console.log(err));
    };

    const [formData, setFormData] = useState({
        sex: '',
        firstName: '',
        lastName: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const days = Array.from({ length: 31 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
    const months = Array.from({ length: 12 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
    const years = Array.from({ length: 100 }, (_, idx) => (new Date().getFullYear() - idx).toString());

    return (
        <Container>
            <Row>
                <H1>Bienvenue chez votre pharmacie</H1>
                <SectionLogo>
                    <Logo style={{ marginRight: '20px' }}>
                        <Image
                            src="/fadjmalogo.png"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </Logo>
                    <Logo>Fadj-Ma</Logo>
                </SectionLogo>
            </Row>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Inscon>
                        <Link href="/" passHref>
                            <Button type="button" style={{ backgroundColor: '#EDF1F5', border: "1px solid #BBB" }}>Connectez-vous</Button>
                        </Link>
                        <Link href="/signup" passHref>
                            <Button type="button">Inscrivez-vous</Button>
                        </Link>
                    </Inscon>
                    <RadioContainer>
                        <RadioLabel>
                            <Input
                                type="radio"
                                name="sex"
                                value="male"
                                checked={formData.sex === 'male'}
                                onChange={handleChange}
                                required
                            />
                            Homme
                        </RadioLabel>
                        <RadioLabel>
                            <Input
                                type="radio"
                                name="sex"
                                value="female"
                                checked={formData.sex === 'female'}
                                onChange={handleChange}
                                required
                            />
                            Femme
                        </RadioLabel>
                    </RadioContainer>

                    <FlexContainer>
                        <InputContainer>
                            <Label htmlFor="firstName">Prénom</Label>
                            <Input
                                id="firstName"
                                type="text"
                                name="firstName"
                                required
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="lastName">Nom</Label>
                            <Input
                                id="lastName"
                                type="text"
                                name="lastName"
                                required
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </InputContainer>
                    </FlexContainer>

                    <Label>Date de naissance</Label>
                    <DateContainer>
                        <DateSelectContainer>
                            <Select
                                id="birthDay"
                                name="birthDay"
                                value={formData.birthDay}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>JJ</option>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>

                        <DateSelectContainer>
                            <Select
                                id="birthMonth"
                                name="birthMonth"
                                value={formData.birthMonth}
                                onChange={handleChange}
                                required
                            >
                                <option value ="" disabled hidden>MM</option>
                                {months.map(month => (
                                    <option key={month} value={month}>{month}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>

                        <DateSelectContainer>
                            <Select
                                id="birthYear"
                                name="birthYear"
                                value={formData.birthYear}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>AAAA</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </Select>
                        </DateSelectContainer>
                    </DateContainer>

                    <FlexContainer>
                        <InputContainer>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </InputContainer>

                        <InputContainer>
                            <Label htmlFor="password">Mot de passe</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputContainer>
                    </FlexContainer>

                    <InputContainer>
                        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </InputContainer>

                    <Button type="submit">S'inscrire</Button>
                </Form>
            </FormContainer>
        </Container>
    );
};

export default SignupForm; 




//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 5rem;
//   padding: 40px 50px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   margin: 0px auto;
//   width: 600px;
//   padding: 0px 20px; 
// `;

// const Input = styled.input`
//   margin: 10px 0px;
//   outline: none;
//   padding: 15px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   box-sizing: border-box;
//   width: 100%; // pour que les champs prennent toute la largeur
// `;

// const Select = styled.select`
//   margin: 10px 0px;
//   padding: 15px;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   width: 100%; // pour que les sélecteurs prennent toute la largeur
// `;

// const Label = styled.label`
//   margin: 5px 0; // Espacement autour des labels
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   gap: 2rem; // Espace entre les colonnes
//   width: 100%; // Prendre toute la largeur
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   flex: 1; // Pour que chaque conteneur prenne une largeur égale
// `;

// const RadioContainer = styled.div`
//   margin: 10px 0;
//   display: flex; // Alignement en ligne
//   align-items: center; // Centre verticalement les éléments
// `;

// const RadioLabel = styled.label`
//   margin-right: 20px; // Espace entre les options
//   display: flex;
//   align-items: center;
// `;

// const Button = styled.button`
//   margin: 10px 0;
//   padding: 15px 70px;
//   border: none;
//   border-radius: 10px;
//   background-color: #A7DBF5;
//   font-weight: 700;
//   color: #000;
//   width: 100%;
//   cursor: pointer;


// `;

// const DateContainer = styled.div`
//   display: flex;
//   justify-content: space-between; // espace entre les champs de date
// `;
// const ConnectSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 0px;
//   gap: 20px;
// `;

// const ConnexionButton = styled.button`
//   cursor: pointer;
//   background: #A7DBF5;
//   border: 1px solid #CCC;
//   color: #0070f3;
//   font-weight: bold;
//   padding: 10px 20px;
//    border-radius: 10px;
  
// `;

// const InscriptionButton = styled.button`
//   cursor: pointer;
//   background: none;
//   border: 1px solid #CCC;
//   padding: 10px;
//   color: #0070f3;
//   font-weight: bold;
//   padding: 10px 20px;
//   border-radius: 10px;
// `;
// const DateSelectContainer = styled.div`
//   flex: 1; // Pour que chaque sélecteur prenne une largeur égale
//   margin: 0 5px; // Pour l'espacement entre les champs de date
// `;
// const Inscon = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     width: 100%;
//     align-items: center;
//     gap: 10px;
//     margin: auto;
//     margin-bottom: 20px;
//     box-sizing: border-box;
//     border-radius: 10px;
// `;
// const SignupForm: React.FC = () => {
//     const [ firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail]  = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const router = useRouter();

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       const response = await axios.post('http://localhost:7000/register', {firstName, lastName, email, password, confirmPassword})
//       .then(result =>  { console.log(result)
//        router.push('/loign')
//       })
//       .catch(err => console.log(err));
//     };

//   const [formData, setFormData] = useState({
//     sex: '',
//     firstName: '',
//     lastName: '',
//     birthDay: '',
//     birthMonth: '',
//     birthYear: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

  

//   const days = Array.from({ length: 31 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
//   const months = Array.from({ length: 12 }, (_, idx) => (idx + 1).toString().padStart(2, '0'));
//   const years = Array.from({ length: 100 }, (_, idx) => (new Date().getFullYear() - idx).toString());

//   return (
//     <Container>
//       <Row>
//         <H1>Bienvenue chez votre pharmacie</H1>
//         <SectionLogo>
//           <Logo style={{ marginRight: '20px' }}>
//             <Image
//               src="/fadjmalogo.png"
//               alt="logo"
//               width={40}
//               height={40}
//             />
//           </Logo>
//           <Logo>Fadj-Ma</Logo>
//         </SectionLogo>
//       </Row>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <Inscon>
//             <Link href="/" passHref>
//               <Button type="button" style={{ backgroundColor: '#EDF1F5', border: "1px solid #BBB"}}>Connectez-vous</Button>
//             </Link>
//             <Link href="/signup" passHref>
//               <Button type="button">Inscrivez-vous</Button>
//             </Link>
//           </Inscon>
//           <RadioContainer>
//             <RadioLabel>
//               <Input
//                 type="radio"
//                 name="sex"
//                 value="male"
//                 checked={formData.sex === 'male'}
//                 onChange={handleChange}
//                 required
//               />
//               Homme
//             </RadioLabel>
//             <RadioLabel>
//               <Input
//                 type="radio"
//                 name="sex"
//                 value="female"
//                 checked={formData.sex === 'female'}
//                 onChange={handleChange}
//                 required
//               />
//               Femme
//             </RadioLabel>
//           </RadioContainer>

//           <FlexContainer>
//             <InputContainer>
//               <Label htmlFor="firstName">Prénom</Label>
//               <Input
//                 id="firstName"
//                 type="text"
//                 name="firstName"
//                 required 
//                 value={email}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </InputContainer>

//             <InputContainer>
//               <Label htmlFor="lastName">Nom</Label>
//               <Input
//                 id="lastName"
//                 type="text"
//                 name="lastName"
//                 required 
//                 value={email}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </InputContainer>
//           </FlexContainer>

//           <Label>Date de naissance</Label>
//           <DateContainer>
//             <DateSelectContainer>
//               <Select
//                 id="birthDay"
//                 name="birthDay"
//                 value={formData.birthDay}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled hidden>JJ</option>
//                 {days.map(day => (
//                   <option key={day} value={day}>{day}</option>
//                 ))}
//               </Select>
//             </DateSelectContainer>

//             <DateSelectContainer>
//               <Select
//                 id="birthMonth"
//                 name="birthMonth"
//                 value={formData.birthMonth}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled hidden>MM</option>
//                 {months.map(month => (
//                   <option key={month} value={month}>{month}</option>
//                 ))}
//               </Select>
//             </DateSelectContainer>

//             <DateSelectContainer>
//               <Select
//                 id="birthYear"
//                 name="birthYear"
//                 value={formData.birthYear}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled hidden>AAAA</option>
//                 {years.map(year => (
//                   <option key={year} value={year}>{year}</option>
//                 ))}
//               </Select>
//             </DateSelectContainer>
//           </DateContainer>

//           <FlexContainer>
//             <InputContainer>
//               <Label htmlFor="email">E-mail</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 name="email"
//                 required 
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)} 
//               />
//             </InputContainer>

//             <InputContainer>
//               <Label htmlFor="password">Mot de passe</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 name="password"
//                 required 
//                 value={email}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </InputContainer>
//           </FlexContainer>

//           <InputContainer>
//             <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
//             <Input
//               id="confirmPassword"
//               type="password"
//               name="confirmPassword"
//               required 
//               value={email}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </InputContainer>

//           <Button type="submit">S'inscrire</Button>
//         </Form>
//       </FormContainer>
//     </Container>
//   );
// };

// export default SignupForm;
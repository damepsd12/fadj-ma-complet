const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee.js');
const ProductModel = require('./models/product');  // Utiliser le modèle Hotel
// const nodemailer = require('nodemailer');
const crypto = require('crypto');


const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/",
  {
    dbName: "employee",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },  
);

app.post("/login", (req, res) => {
   const {email, password} = req.body;
   EmployeeModel.findOne({email: email})
   .then(user => {
       if(user){
         if(user.password === password){
          res.json("success")
         }else{
           res.json("Le mot de passe est incorrect")
         }
       }else{
        res.json("No record existed")
       }
   })

})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(7000, () => {
  console.log("server is running on port 7000")
})

// // Configuration de Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//       user: 'votre-email@gmail.com',
//       pass: 'votre-mot-de-passe'
//   }
// });



// Route pour récupérer tous les hôtels
app.get('/product', async (req, res) => {
  try {
      const products = await ProductModel.find();  // Récupérer tous les hôtels
      res.json(products);
  } catch (error) {
      console.error('Erreur lors de la récupération des produits:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: error.message });
  }
});

// Route pour l'ajout d'un hôtel
app.post('/product', async (req, res) => {
  const { name, description, price, currency, imageUrl } = req.body;

  try {
      const newProduct = new ProductModel({
          name,
          description,
          price,
          currency,
          imageUrl
      });

      await newProduct.save();

      res.status(201).json({
          message: 'Le produit ete créé avec succès',
          product: newProduct
      });
  } catch (error) {
      console.error('Erreur lors de la création du produit:', error);
      res.status(500).json({ message: 'Erreur lors de la création du produit', 
          error: error.message });
  }
});



// // Route pour la réinitialisation du mot de passe
// app.post('/password', async (req, res) => {
//   const { email } = req.body;

//   console.log(Request received for reset-password with email: ${email});

//   try {
//       const user = await EmployeeModel.findOne({ email });

//       if (!user) {
//           console.log('No user found');
//           return res.status(404).json({ message: 'No record found' });
//       }

//       const resetToken = crypto.randomBytes(32).toString('hex');
//       user.resetPasswordToken = resetToken;
//       user.resetPasswordExpires = Date.now() + 3600000;
//       await user.save();

//       const resetLink = http://localhost:3000/reset-password/${resetToken};

//       const mailOptions = {
//           from: 'votre-email@gmail.com',
//           to: email,
//           subject: 'Réinitialisation du mot de passe',
//           text: Cliquez sur ce lien pour réinitialiser votre mot de passe : ${resetLink}
//       };

//       await transporter.sendMail(mailOptions);
//       console.log('Reset email sent');
//       res.json({ message: 'Un email de réinitialisation a été envoyé' });
//   } catch (error) {
//       console.error('Error sending reset email:', error);
//       res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
//   }
// // });
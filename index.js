const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()
const cors = require('cors')
const fs = require('fs');
const User = require('./models/User.js'); 


const app = express();



// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos

const uri = `${process.env.MONGODB_URL}`;
const option = { useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri, option)
  .then(() => {
    console.log('Base de datos conectada');
    
    User.find({}).exec()
      .then((data) => {
        // Convierte los datos a formato JSON
        const jsonData = JSON.stringify(data);

        // Escribe el JSON en un archivo
        fs.writeFile('usuarios.json', jsonData, (err) => {
          if (err) {
            console.error('Error al escribir en el archivo:', err);
            return;
          }
          // console.log('Datos de usuarios guardados en usuarios.json');
        });
      })
      .catch((error) => {
        console.error('Error al consultar la base de datos:', error);
      });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// import routes
const authRoutes = require('./routes/auth.js')
const verifyToken = require('./middleware/verifyToken.js')
const product = require('./routes/product.js')

app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu frontend
    credentials: true,
  }));  

// route middlewares
app.use('/api/user', authRoutes);
app.use('/api', verifyToken, product)
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3020;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
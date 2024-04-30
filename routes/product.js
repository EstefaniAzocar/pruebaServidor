const router = require('express').Router();
const axios = require('axios');


router.get('/product', async (req, res) => {

      try {
   
    const response = await axios.get('https://dummyjson.com/carts');
    res.json(response.data.carts);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }

})

module.exports = router


const express = require('express')
const Dog = require('./dogs-model')
const router = express.Router()

//order matters so this version logs first
router.get('/', async (req, res) => { 
  console.log('B')
  try {
    const data = await Dog.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving the dogs',
    });
  }
});

router.get('/', (req, res) => {
  console.log('A')
  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the dogs',
      });
    });
});

module.exports = router

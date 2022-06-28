const express = require('express');
const router = express.Router();
const controller = require('../controllers/pet.controller');

router.get('/', async (req, res) => {
  let pets = await controller.GetPets();
  res.render('pets', { pets });
});

router.get('/:id', async (req, res) => {
  let pet = await controller.GetPet(req.params.id);
  res.render('pet', { pet });
});

router.post('/', async (req, res) => {
  await controller.AddPet(req);
  res.redirect('/pets');
});

router.put('/:id', async (req, res) => {
  await controller.UpdatePet(req);
  res.redirect('/pets');
});

router.delete('/:id', async (req, res) => {
  await controller.DeletePet(req);
  res.redirect('/pets');
});

module.exports = router;

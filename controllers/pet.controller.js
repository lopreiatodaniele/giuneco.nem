const Pet = require('../models/pet.model');

const GetPets = async () => {
  try {
    const pets = await Pet.find();
    return pets;
  } catch (error) {
    return error;
  }
};

const GetPet = async (id) => {
  try {
    const pet = await Pet.findById(id);
    return pet;
  } catch (error) {
    return error;
  }
};

const AddPet = async (req) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    return pet;
  } catch (error) {
    return error;
  }
};

const UpdatePet = async (req) => {
  console.log('im here');
  console.log(req.body);
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body);
    return pet;
  } catch (error) {
    return error;
  }
};

const DeletePet = async (req) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.id);
    return pet;
  } catch (error) {
    return error;
  }
};

module.exports = { GetPets, GetPet, AddPet, UpdatePet, DeletePet };

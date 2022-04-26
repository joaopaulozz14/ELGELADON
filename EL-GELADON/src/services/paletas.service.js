const Paleta = require('../models/Paleta');

const findPaletasService = async () => {
  const paletas = await Paleta.find();
  return paletas;
};

const findPaletaByIdService = async (idParam) => {
  const onePaleta = await Paleta.findById(idParam);
  return onePaleta;  
};


const createPaletaService = async (newPaleta) => {
  const createdPaleta = await Paleta.create(newPaleta)
  return createdPaleta;
};
const updatePaletaService = async (idParam, editedPaleta) => {
  const updatePaleta = await Paleta.findByIdAndUpdate(idParam, editedPaleta);
  return updatePaleta;
};
const deletePaletaService = async (idParam) => {
  return await Paleta.findByIdAndDelete(idParam);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};

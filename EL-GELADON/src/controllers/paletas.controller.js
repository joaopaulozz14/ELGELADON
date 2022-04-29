const paletasService = require('../services/paletas.service');
const mongoose = require('mongoose');

const findAllPaletasController = async (req, res) => {
  const allPaletas = await paletasService.findPaletasService();
  if (allPaletas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhuma paleta cadastrada!' });
  }
  res.send(allPaletas);
};


const findByIdPaletaController = async (req, res) => {
  const idParam = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(idParam)){
    res.status(400).send({message: 'Id inválido!'});
  }
  /*if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }*/

  const chosenPaleta = await paletasService.findPaletaByIdService(idParam);
  res.send(chosenPaleta);
};

const createPaletaController = async (req, res) => {
  const paleta = req.body;
  if(
    !paleta||
    !paleta.sabor||
    !paleta.descricao||
    !paleta.foto||
    !paleta.preco
    ){
      return res.status(400).send({message: `Você não preencheu todos os dados!`});
    };

  const newPaleta = await paletasService.createPaletaService(paleta);
  res.status(201).send(newPaleta);
};



const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;

  if(!mongoose.Types.ObjectId.isValid(idParam)){
    res.status(400).send({message: 'Id Inválido!'});
    return;
  };

  const chosenPaleta = await paletasService.findPaletasService(idParam);
  if(!chosenPaleta){
    return res.status(400).send({message: `Paleta não encontrada`});
  };
  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );

  if(
    !paletaEdited||
    !paletaEdited.sabor||
    !paletaEdited.descricao||
    !paletaEdited.foto||
    !paletaEdited.preco
  ){
    return res.status(200).send({ message: 'Você não preencheu todos os dados corretamente!'});
  }; 
  res.send(updatedPaleta);
};

const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};

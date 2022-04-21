const paletasService = require('../services/paletas.service');

const findPaletasController = (req, res) => {
  const allPaletas = paletasService.findPaletasService();
  res.send(allPaletas);
};

const findPaletaByIdController = (req, res) => {
  const parametroId = Number(req.params.id);
  
  if (!parametroId){
    return res.status(400).send({ message: "Id Inválido!" })
  }

  const chosenPaleta = paletasService.findPaletaByIdService(parametroId);

  if (!chosenPaleta){
    return res.status(404).send({ message: "Paleta não encontrada!" })
  }


  res.send(chosenPaleta);
};

const createPaletaController = (req, res) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res.status(400).send({ mensagem: "Você não preencheu todos os dados para adicionar uma nova paleta ao cardápio!" });
  }

  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

const updatePaletaController = (req, res) => {
  const idParam = +req.params.id;
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

module.exports = {
    findPaletasController,
    findPaletaByIdController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController,
  };

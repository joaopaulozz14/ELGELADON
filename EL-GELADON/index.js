require('dotenv').config();
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/paletas.route');
const connectToDatabase = require('./src/database/database');

const port = process.env.PORT || 3000;
const app = express();

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use('/paletas', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

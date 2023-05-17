//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Thiago Silva Soares
//DATA: 17/05/2023

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para processar o corpo das requisições como JSON
app.use(express.urlencoded({ extended: true })); // Middleware para processar o corpo das requisições codificado como URL

const patients = []; // Array para armazenar os pacientes cadastrados

app.post('/patients', createPatient); // Rota para cadastrar um paciente

function createPatient(req, res) {
  const { name, age, gender } = req.body; // Extrai as informações do corpo da requisição
  const patient = { name, age, gender }; // Cria um objeto paciente com as informações
  patients.push(patient); // Adiciona o paciente ao array de pacientes
  res.status(201).send(`Paciente ${name} cadastrado com sucesso.`); // Retorna uma resposta com status 201 e uma mensagem
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); // Inicia o servidor e imprime uma mensagem indicando a porta em que está sendo executado
});
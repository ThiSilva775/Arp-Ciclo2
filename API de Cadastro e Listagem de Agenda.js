//Curso de Engenharia de Software - UniEVANGÉLICA
//Disciplina de Programação Web
//Dev: Thiago Silva Soares
//DATA: 17/05/2023

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware para processar o corpo das requisições como JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware para processar o corpo das requisições codificado como URL

let appointments = []; // Array para armazenar os agendamentos

// Rota para cadastrar um agendamento
app.post('/appointments', (req, res) => {
  const { patientName, date } = req.body; // Extrai as informações do corpo da requisição
  const appointment = { patientName, date }; // Cria um objeto de agendamento com as informações
  appointments.push(appointment); // Adiciona o agendamento ao array de agendamentos
  res.status(201).send(`Agendamento para ${patientName} marcado para ${date}.`); // Retorna uma resposta com status 201 e uma mensagem
});

// Rota para listar todos os agendamentos
app.get('/appointments', (req, res) => {
  res.status(200).json(appointments); // Retorna todos os agendamentos em formato JSON
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); // Inicia o servidor e imprime uma mensagem indicando a porta em que está sendo executado
});
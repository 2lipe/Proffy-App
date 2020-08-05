# Proffy App

Projeto web desktop/mobile desenvolvido na semana NLW bootcamp da RocketSeat.


## Funcionalidade

A aplicação consiste em facilitar a busca e o encontro entre professores e alunos, onde cada professor
pode realizar o seu cadastro e o cadastro da sua respectiva aula, informando a matéria lecionada,
biografia, avatar, horário e dias de disponibilidade, custo por hora aula e telefone para contato.
E o aluno pode fazer buscar pela matéria e horário assim encontrando o professor que melhor 
atende a sua busca.

## Desenvolvimento

Realizado o desenvolvimento tanto da API Rest-backend quanto frontend da aplicação, 
respeitando os modelos e padões de projetos desejados, clean code, organização, 
responsividade e mobile first.


## Técnologias utilizadas

TypeScript, ReactJS, Node, Express, SQLite, knex, NPM, GIT.
- **Libs**: Axios, eslint


## Funcionalidades da API

URL: [http://localhost:3030]

- Envia um `POST` para a rota `http://localhost:3030/classes` cadastrando os professores
- Requisita um `GET` para a rota `https://localhost:3030/classes` retornando os professores/aulas

- Envia um `POST` para a rota `http://localhost:3030/connections` cadastrando as conexões realizadas
- Requisita um `GET` para a rota `https://localhost:3030/connections` mostrando as conexões


## Rodando a aplicação

# Proffy App

Projeto web desktop/mobile desenvolvido na semana NLW bootcamp da RocketSeat.


## Funcionalidade

A aplicação consiste em facilitar a busca e o encontro entre professores e alunos, onde cada professor
pode realizar o seu cadastro e o cadastro da sua respectiva aula, informando a matéria lecionada,
biografia, avatar, horário e dias de disponibilidade, custo por hora aula e telefone para contato.
E o aluno pode faze a buscar pela matéria e horário assim encontrando o professor que melhor 
atende a sua busca.

## Desenvolvimento

Realizado o desenvolvimento tanto da API-Rest backend quanto frontend da aplicação, 
respeitando os modelos e padões de projetos desejados, clean code, organização, 
responsividade e mobile first.


## Técnologias utilizadas

TypeScript, ReactJS, React Native, Node, Express, SQLite, knex, NPM, GIT, Expo,
- **Libs**: Axios, eslint, Material Icons, Async Storage...


## Funcionalidades da API

- Envia um `POST` para a rota `http://localhost:3030/classes` cadastrando os professores
- Requisita um `GET` para a rota `https://localhost:3030/classes` retornando os professores/aulas

- Envia um `POST` para a rota `http://localhost:3030/connections` cadastrando as conexões realizadas
- Requisita um `GET` para a rota `https://localhost:3030/connections` mostrando as conexões


## Rodando a aplicação Desktop

- Clone este respositório com o comando: $git clone git@github.com:2lipe/Proffy-App.git
- Tenha o NPM ou Yarn instalados.

- Instale as dependências do projeto na pasta `web, mobile e server` com o 
comando `npm install` ou `yarn install` 

- Abra a pasta `server` e rode no terminal `npm start` ou `yarn start`.
  - O servidor irá rodar na porta `3030`.

- Abra a pasta `frontend` em outro terminal e rode `npm start` ou `yarn start`
  - A aplicação ira abrir na porta `3000`.

## Rodando a aplicação Mobile

- Execute os passos do exemplo anterior exceto rodar o `frontend` ao invés disso abra a pasta
`mobile` e com o terminal execute `npm start` ou `yarn start`.

Para rodar a aplicação mobile precisara do aplicativo Expo instalado em seu celular
(disponível na [App Store](https://apps.apple.com/br/app/expo-client/id982107779) e na [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)) ou apenas abra o emulador
pelo seu computador.

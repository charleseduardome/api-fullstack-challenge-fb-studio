# REST API - FB Quest

## Challenge - FullStack Engineer

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Run%20FBQuest&uri=https%3A%2F%2Fgithub.com%2Fcharleseduardome%2Fapi-fullstack-challenge-fb-studio%2Fblob%2Fmaster%2Fapi-fbquest.json)

## Sobre o projeto

Esta API fornece o necessário para buscar e atualizar as questões.

O usuário é capaz de visualizar, editar as questões;

O usuário é capaz de marcar se a questão está disponivel ou não.

## Desafios e problemas

MongoDB possui um tipo de campo (ObjectIdColumn) especifico para gerar IDs automáticas, e métodos especificos (getMongoRepository, MongoRepository) para funcionar com o typeORM, não sabendo disto precisei de tempo para enterder e corrigir.

## Melhorias

Gerenciamento de Cache para melhorar a busca de questões.

## 🚀 Technologies

Tecnologias que eu usei para desenvolver essa API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [MongoDb](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

Import o arquivo `api-fbquest.json` no Insomnia App ou clique em [Run in Insomnia]() button.

### Requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- Uma instância do [MongoDb](https://www.mongodb.com/)

> Obs.: Eu recomendo usar docker

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/charleseduardome/api-fullstack-challenge-fb-studio && cd api-fullstack-challenge-fb-studio
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Faça uma cópia do arquivo '.env.example' para '.env'
# e set com SUAS variáveis locais
$ cp .env.example .env

# Crie a instance do Mongodb usando Docker
$ docker run --name mongo_fbquest -p 27017:27017 -d -t mongo

# Faça uma cópia do arquivo 'ormconfig.example.json' para 'ormconfig.json'
# e set as valores de acordo com seu ambiente,
# conectar-se ao contêiner do banco de dados do docker
$ cp ormconfig.example.json ormconfig.json

# Para finalizar, execute o serviço da API
$ yarn dev:server

```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Charles Eduardo 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/charleseduardome/)

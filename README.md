# API Rest usando MongoDB Atlas
Um modelo simples de API Rest fazendo CRUD usando Node.js, Express e MongoDB.

## O que faz?
Basicamente as quatro operações do CRUD em um banco de dados noSQL MongoDB com métodos HTTP:

<img src="https://tomipasin.com/diversos/HTTPmethod.png" />

## Como faz?
Usei o Mongoose e express como forma de fazer o Node interagir com o Mongo.

## Como testar?
Bem, o primeiro passo é clonar esse repositório.
Feito isso use o npm para instalar as dependências que estão no package.json:

```sh
npm install
```

Também será necessário, caso tu não tenha uma instância do MongoDB Atlas ou local rodando, criar uma. Eu poderia explicar aqui mas achei melhor deixar este tutorial que explica de forma simples como fazer o processo: <a href="https://medium.com/reprogramabr/conectando-no-banco-de-dados-cloud-mongodb-atlas-bca63399693f#:~:text=Primeiro%20passo%20%C3%A9%20criar%20uma,%2C%20pois%20demora%20para%20carregar..">Clique aqui</a>. 

Depois disso é só ininciar o servidor. Por padrão deixei na porta 3001 mas isso pode ser alterado no server.js.

```sh
npm start
```

Usamos aqui o nodemon que fica verificando se há alterações no código e reinicia o servidor automaticamente.

Inicialmente tu deve editar o arquivo /src/database/config.js: 


<script src="https://gist.github.com/tomipasin/690b00a0c5ac07b5c00aa806ea63d3b8.js"></script>




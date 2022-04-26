<img height="350" width="1000" src="https://user-images.githubusercontent.com/70352508/165195653-a5f83ffe-c1a2-41a5-b798-ca97ee4a89a6.gif">

<h1 align="center">
  <a align="center" href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /></a>
  <a href="https://mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" /></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/Vscode-2496ED?style=for-the-badge&logo=visualstudio&logoColor=blue&color=white"></a>
</h1>

## Versão do Projeto
 Essa é versão dois do projeto Compass Lisa. Primeiramente, feito em JavaScript. Agora, refatorado para TypeScript.

## Descrição do Projeto>
A Compass entrou em um novo ramo de mercado, a Compass lisa um seguimento carros para alugar de luxo e semi luxo. Para isso, foi necessário o desenvolvilmento de uma API para ajudar com as atividades da empresa

## Índice
<!--ts-->
   * [Sobre o Projeto](#sobre-o-projeto)
   * [Como usar a API ❓](#como-usar-a-api-)
   * [👨‍💻 Rodando o Back End (servidor)](#-rodando-o-back-end-servidor)
   * [📝 Rotas do projeto](#-rotas-do-projeto)
   * [🚗 ROTAS DE CARROS](#-rotas-de-carros)
   * [🧍‍♀️🧍 ROTAS DE PESSOAS](#%EF%B8%8F-rotas-de-pessoas)
   * [🏷 ROTA DE AUTENTICAÇÃO](#-rota-de-autenticação)
   * [👨‍💼 ROTA DE LOCADORA](#-rota-de-locadora)
   * [🌐 Deploy](#-deploy)
   * [🛠 Tecnologias](#-tecnologias)
<!--te-->


## Como usar a API ❓

### Pré-requisitos 
> Para usar esta API é preciso instalar as seguintes ferramentas:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
> Para editar o código eu recomendo: 
- [VSCode](https://code.visualstudio.com/)
> Para testar as rotas você pode usar:
- [Postman](https://www.postman.com)


### 👨‍💻 Rodando o Back End (servidor)

```bash
# Clone este repositório
 git clone https://github.com/MathLopes1/compass-lisa-2.0.git

# Acesse a pasta do projeto 
 cd compass-lisa-2.0

# crie um arquivo .env seguindo o modelo do arquivo .env.exemplo e preencha os campos.

# Instale as dependências
 npm i

# Faça o build da aplicação para JavaScript
npm rum build
           
# Execute a aplicação em modo de Produção
npm run start

# Execute a aplicação em modo de desenvolvimento
npm run dev

# Execute os testes            
npm run test            
            
# O servidor iniciará na porta: 3000 
```


### 📝 Rotas do projeto:
> Rotas de carros: `localhost:3000/api/v1/car`

> Rotas de pessoas: `localhost:3000/api/v1/people`

> Rota de login: `localhost:3000/api/v1/authenticate`

>Rota de locadora: `localhost:3000/api/v1/rental`

### 🚗 ROTAS DE CARROS
### REQUEST - (POST)
> Para cadastrar carros.

> POST - `localhost:3000/api/v1/car`

Exemplo de body:
```json
{

    "modelo": "GM S10 2.8",
    "cor": "branco",
    "ano": "2021",
    "acessorios": [
    { "descricao": "Ar-condicionado" },
    { "descricao": "Dir. Hidráulica" },
    { "descricao": "Cabine Dupla" },
    { "descricao": "Tração 4x4" },
    { "descricao": "4 portas" },
    { "descricao": "Diesel" },
    { "descricao": "Air bag" },
    { "descricao": "ABS" }
    ],
    "quantidadePassageiros": 5
    
}
```


### REQUEST - (GET)

> Para listar todos os carros.

> GET - `localhost:3000/api/v1/car`

Exemplo de query:
```json

{

    "modelo": "GM S10 2.8",
    "cor": "branco",
    "acessorio": "4 portas",
    "ano": "2020",
    "quantidadePassageiros": 5

}

```


### REQUEST - (PUT)

> Para atualizar um carro.

> PUT - `localhost:3000/api/v1/car/:id`

Exemplo de body:
```json
{
 
    "modelo": "GM S10 2.8",
    "cor": "branco",
    "acessorios": [
    { "descricao": "Ar-condicionado" },
    { "descricao": "Dir. Hidráulica" }
    ]
}
```


### REQUEST - (DELETE)

> Para deletar um carro .

> DELETE - ` localhost:3000/api/v1/car/:id`


### REQUEST - (GET)

> Para Buscar um carro por id

> GET - `localhost:3000/api/v1/car/:id`

Exemplo de retorno:
```json
{
 
    "_id": "61f014ee47702afdee414f78",
    "modelo": "GM S10 2.8",
    "cor": "branco",
    "ano": "2021",
    "acessorios": [
        {
            "descricao": "Ar-condicionado"
        },
        {
            "descricao": "Dir. Hidráulica"
        },
        {
            "descricao": "Cabine Dupla"
        },
        {
            "descricao": "Tração 4x4"
        },
        {
            "descricao": "4 portas"
        },
        {
            "descricao": "Diesel"
        },
        {
            "descricao": "Air bag"
        },
        {
            "descricao": "ABS"
        }
    ],
    "quantidadePassageiros": 5

}
```
### REQUEST - (PATCH)

> Para atualizar um acessorio especifico .

> PATCH - ` localhost:3000/api/v1/car/:id/acessorios/:idAcessorio`
Exemplo de body:
```json
{
    "descricao": "4 portas"
}

```


### 🧍‍♀️🧍 ROTAS DE PESSOAS
### REQUEST - (POST) 
> Para cadastrar uma pessoa.

> POST - ` localhost:3000/api/v1/people`

Exemplo de body:
```json

{

"nome": "joaozinho ciclano",
"cpf": "131.147.860-49",
"data_nascimento": "03/03/2021",
"email": "joazinho@email.com",
"senha": "123456",
"habilitado": "sim"

}

```


### REQUEST - (GET) 
> Para listar todas as pessoas.

> GET - `localhost:3000/api/v1/people`

- Todos os campos podem ser usados em buscas por query.


### REQUEST - (PUT)
> Para atualizar um registro de pessoa.

> PUT - `localhost:3000/api/v1/people/:id`

Exemplo de body:
```json

{

"nome": "matheus lopes",
"habilitado": "não"

}

```


### REQUEST - (DELETE)

> Para deletar um registro de pessoa.

> DELETE - `localhost:3000/api/v1/people/:id`


### REQUEST - (GET)

> Para buscar uma pessoa por id.

> GET - `localhost:3000/api/v1/people/:id`

Exemplo de retorno:
```json

{

    "_id": "61f2b8c5bee11d93722be472",
    "nome": "joaozinho ciclano",
    "cpf": "131.147.860-49",
    "data_nascimento": "03/03/2000",
    "email": "joazinho@email.com",
    "senha": "123456",
    "habilitado": "sim"
}

```
### 🏷 ROTA DE AUTENTICAÇÃO
### REQUEST - (POST)

> Fazer autenticação e receber um token JWT.

> POST - `localhost:3000/api/v1/authenticate`

Exemplo de body:
```json

{

    "email": "joazinho@email.com",
    "senha": "123456"
    
}

```
### 👨‍💼 ROTA DE LOCADORA
### REQUEST - (POST)
> Para cadastrar uma locadora.

> POST - ` localhost:3000/api/v1/rental`

Exemplo de body:
```json

{
"nome": "Localiza Rent a Car",
"cnpj": "16.670.085/0001-55",
"atividades": "Aluguel de Carros E Gestão de Frotas",
"endereco": [
{
"cep": "96200-200",
"number":"1234",
"isFilial": false
},
{
"cep": "96200-500",
"number":"5678",
"complemento": "Muro A",
"isFilial": true
}
]
}

```
### REQUEST - (GET) 
> Para listar todas as locadoras.

> GET - `localhost:3000/api/v1/rental`

- Todos os campos podem ser usados em buscas por query.

### REQUEST - (PUT)
> Para atualizar um registro de locadora.

> PUT - `localhost:3000/api/v1/rental/:id`

- Todos os campos podem ser atualizados

### REQUEST - (DELETE)

> Para deletar um registro de locadora.

> DELETE - `localhost:3000/api/v1/rental/:id`


### REQUEST - (GET)

> Para buscar uma locadora por id.

> GET - `localhost:3000/api/v1/rental/:id`
Exemplo de retorno:
```json

{

   "_id": "620fc4febd69c4741992d016",
    "nome": "Locadora de carros",
    "cnpj": "16.670.985/5501-55",
    "atividades": "Aluguel de Carros E Gestão de Frotas",
    "endereco": [
        {
            "cep": "52031-210",
            "number": "17",
            "isFilial": false,
            "logradouro": "Rua Ledinha",
            "bairro": "Campo Grande",
            "localidade": "Recife",
            "uf": "PE",
            "_id": "620fc4febd69c4741992d017"
        },
        {
            "cep": "96200-200",
            "number": "5258",
            "isFilial": true,
            "logradouro": "Rua General Canabarro",
            "bairro": "Centro",
            "localidade": "Rio Grande",
            "uf": "RS",
            "_id": "620fc4febd69c4741992d018"
        }
    ],
}

```

### 🌐 Deploy
 > O deploy foi feito utilizando o heroku para a hospedagem da aplicação.
 - [Link para o site da Compass Lisa 2.0](https://math-compass-lisa-version-2.herokuapp.com/api/v1/api-docs/)
  
### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Postman](https://pt-br.reactjs.org/)
- [MongoDB](https://www.mongodb.com)
- [mongoose](https://mongoosejs.com)
- [express](http://expressjs.com/)

## 👨‍💻 Autor

<div align=left>

- <table>
  <tr align=center>
    <th><strong> 💻Matheus Lopes </strong></th>
  </tr>
   <td>
      <a href="https://github.com/MathLopes1">
        <img width="168" height="140" src="https://avatars.githubusercontent.com/u/70352508?v=4" > <p align="left">
</p></a>
    <p align="center">Developer</p>
    </td>
  </tr>
</table>
</div>

<div align=left>
 
<br>
                 
---
 
## 📝 LICENÇA

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório.
 

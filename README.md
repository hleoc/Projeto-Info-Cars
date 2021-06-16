# Boas vindas ao repositório do Projeto Info Cars!
Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário fictício
Info Cars está lançando uma nova plataforma de vendas de carro. Nesta plataforma, é realizado o cadastro de novos carros para os clientes consultarem.

Atributos de um Carro são:
- Id
- Placa
- Chassi
- Renavam
- Modelo
- Marca
- Ano


## Instruções para a instalação do projeto:
1. Crie uma pasta para onde o projeto será clonado

2. Clone o repositório
  * `git clone git@github.com:hleoc/Projeto-Info-Cars.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-Info-Cars`

3. Instale as dependências
  * `npm install`

4. Configure um arquivo .env com as seguintes variáveis de ambiente
APP_PORT=3000
POSTGRES_DB_NAME=
POSTGRES_DB_USERNAME=
POSTGRES_DB_PASSWORD=
POSTGRES_DB_DATABASE=
NODE_ENV=dev

## Criação do Banco de Dados com Docker 🐳
Execute o seguinte comando no terminal para criar uma imagem com o banco de dados PostgreSQL:

```bash
docker-compose up --force-recreate
```
- OBS: Após a execução a imagem info-api será gerada no seu Docker e o servidor será executado.

- Se estiver tudo funcionando corretamente aparecerá a seguinte mensagem no terminal: Back-end started on localhost:3000! 🚀

- Se estiver tudo funcionando corretamente aparecerá a seguinte mensagem na rota http://localhost:3000/ : InfoSistemas-API 2021

## Criando a estrutura básica do Banco de Dados 🐘
Para criar as tabelas no banco de dados, execute o seguinte comando:

```bash
npm run typeorm migration:run
```

## O que foi desenvolvido no back-end
Foi desenvolvida uma API utilizando a arquitetura RESTful!

Nesse projeto é possível Criar, Listar todos os veículos, Editar, Visualizar um carro específico e Deletar um carro específico(ou `CRUD`, para os mais íntimos 😜).

O projeto deve rodar na porta 3000 no back-end.


### Data de Entrega
O projeto tem até a seguinte data para ser entregue: `15/06/2021`.


## Requisitos Obrigatórios:
- É necessário ter o Docker instalado no computador para rodar o projeto. 


## Tecnologias utilizadas
VSCode
Docker
JavaScript
TypeScrip
TypeORM
NodeJS
DBeaver
Postman
Git/Github
Arquitetura RESTful


## Melhorias Futuras
- Criar projeto front-end utilizando a tecnologia Angular 5+
- Criar teste unitários utilizando Mocha (Node) para cada uma das operações (create, read, update, delete)

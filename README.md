# meu-pastel API

> Contexto: 

Uma rede de pastelaria deseja automatizar seu processo de pedidos, clientes e pastéis, até então antes era tudo feito com base em papel e caneta, agora com a chegada do IFood a gerência percebeu que poderiam aumentar expressivamente seu lucro real se disponibilizasse uma API para facilitar o processo de automatização.

> Com base nisso, temos alguns pré-requisitos para atender essa API.

A necessidade é desenvolver uma API RESTFul para o gerenciamento de pedidos de uma pastelaria utilizando Node e MongoDB.

### Documentação da API

> /api/pastel

|           ROTA          |     METHOD      |         DESCRIPTION                  |
| ----------------------- | --------------- | -------------------------------------| 
| /api/pastel             |       GET       | listar todos os pastéis              | 
| /api/pastel             |       POST      | criar um novo pastel                 | 
| /api/pastel/pastelId    |       GET       | visualizar um pastel a partir do ID  | 
| /api/pastel/pastelId    |       PUT       | atualizar um pastel a partir do ID   | 
| /api/pastel/pastelId    |       DELETE    | remover um pastel a partir do ID     | 


> /api/cliente

|           ROTA           |     METHOD      |         DESCRIPTION                   |
| ------------------------ | --------------- | ------------------------------------- | 
| /api/cliente             |       GET       | listar todos os clientes              | 
| /api/cliente             |       POST      | criar um novo cliente                 | 
| /api/cliente/clienteId   |       GET       | visualizar um cliente a partir do ID  | 
| /api/cliente/clienteId   |       PUT       | atualizar um cliente a partir do ID   | 
| /api/cliente/clientelId  |       DELETE    | remover um cliente a partir do ID     | 


> /api/pedido

|           ROTA          |     METHOD      |         DESCRIPTION                  |
| ----------------------- | --------------- | -------------------------------------| 
| /api/pedido             |       GET       | listar todos os pedidos              | 
| /api/pedido             |       POST      | criar um novo pedido                 | 
| /api/pedido/pedidoId    |       GET       | visualizar um pedido a partir do ID  | 
| /api/pedido/pedidoId    |       PUT       | atualizar um pedido a partir do ID   | 
| /api/pedido/pedidoId    |       DELETE    | remover um pedido a partir do ID     | 


## Instruções para entrega

* Versione, com git, e hospede seu código em algum serviço de sua preferência: github ou gitlab.
* Crie um README com instruções claras sobre como executar seu projeto.
* Submeta o link do seu repositório para o googleclass-room da atividade. 
* Dúvidas podem ser esclarecidas durante a aula.

## Sobre o projeto

A API Restful deve contemplar os módulos **Cliente**, **Pastel** e **Pedido**, sendo que cada um devera conter  endpoints **CRUD**.

Sobre CRUD:
* Create: Criação de cliente, pastel e pedidos.
* Read: Leitura de cliente, pastel e pedidos.
* Update: Atualização de cliente, pastel e pedidos.
* Delete: Remoção de cliente, pastel e pedidos.


## MongoDB 
> As tabelas devem conter as seguintes informações, sinta-se livre para adotar Mongoose
para fazer as validações necessárias.

* **Cliente** 
 - nome 
 - email 
 - telefone 
 - data de nascimento 
 - endereço
   - Rua
   - Nº 
   - complemento 
   - bairro
   - cidade
   - estado 
   - cep
 - data de cadastro

* **Pastel** 
 - nome, 
 - preço
 - foto`

* **Pedido** 
 - código do cliente, 
 - código(s) do pastel, 
 - data da criação`;

## Requisitos

* Não devem existir dois clientes com o mesmo email.
* O pastel deve possuir foto.
* O sistema deve conter uma série de tipos de pastéis já definidos.
* O pedido deve contemplar N pastéis.
* O cliente pode contemplar N pedidos.
* Após a criação do pedido o sistema deve disparar um email para o cliente contendo os detalhes do seu pedido.
* Os registros devem conter a funcionalidade de soft deleting.


## Critérios de avaliação

* Profundidade do conhecimento e utilização das funcionalidades do framework.
* Organização do código.
* Fidelidade aos requisitos solicitados.

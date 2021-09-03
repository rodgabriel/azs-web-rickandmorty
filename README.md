# Rick and Morty App

Aplicação em React que consome a API de Rick and Morty e permite buscar por episódios, marcar episódios como favoritos ou vistos e detalhar informações sobre o episódio.

Tecnologias utilizadas:
- React
  - ApolloClient (graphql)
  - Typescript
  - styled-components
  - Context API
      
## Instruções para instalação e setup

### Requisitos

- Ter o NodeJS instalado (de preferência a última versão ou superior à v14.15.4)
> [Instalando o Node](https://nodejs.org/pt-br/download/package-manager/ "Clique aqui para aprender a instalar o Node!")

- Ter o gerenciador de dependências yarn instalado (npm também funciona, porém recomendo o yarn)
> [Instalando o yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#debian-stable "Clique aqui para aprender a instalar o yarn!")

### Setup

Clone este repositório.
Com o Git instalado, digite no terminal:
```shell
cd <diretório da sua preferência>
git clone https://github.com/rodgabriel/azs-web-rickandmorty.git
```

### Inicialização 

Acesse a pasta do projeto que você clonou e instale as depedências:
```shell
> azs-web-rickandmorty/ 
yarn
```

Rode o projeto:
```shell
> azs-web-rickandmorty/
yarn start
```

## Testando a aplicação

Suíte de testes utilizando [Cypress](https://www.cypress.io/).

**Com o projeto rodando** execute o seguinte comando para rodar a suíte de testes do cypress:
```shell
> azs-web-rickandmorty
yarn cypress
```

![Suíte de testes](./github/tests-suite.png)


    

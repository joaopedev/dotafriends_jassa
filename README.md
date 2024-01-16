# Jassa DOTA Friends App

Este projeto é uma aplicação em React com TypeScript, utilizando ChakraUI para estilização. A aplicação foi criada com o intuito de permitir que pessoas joguem Dota 2 com o criador da aplicação. O projeto conta com um frontend básico contendo apenas uma tela e um backend em Node.js para o envio de e-mails.

## Como Começar

Para executar a aplicação localmente, siga estes passos:

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-nome-de-usuario/jassa-dota-friends.git
    cd jassa-dota-friends
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    npm start
    ```

    A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm start`: Inicia a aplicação em modo de desenvolvimento.
- `npm test`: Inicia o executor de testes em modo interativo.
- `npm run build`: Compila a aplicação para produção no diretório `build`.
- `npm run eject`: Ejeta a aplicação do Create React App (use com cuidado).

## Backend

A aplicação inclui um backend construído com Node.js para funcionalidades relacionadas ao envio de e-mails. Certifique-se de que o servidor backend esteja em execução antes de utilizar recursos relacionados a e-mails.

Para iniciar o servidor backend, navegue até o diretório `backend` e execute:

```bash
cd backend
npm install
npm start
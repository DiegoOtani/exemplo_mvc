# Ambiente MVC com Node.js
## Descrição
Este projeto é um exemplo básico de uma aplicação Node.js que segue o padrão MVC (Model-View-Controller). Ele exibe uma mensagem na página inicial, com suporte a parâmetros dinâmicos na URL para personalização.

## Estrutura de Diretórios
```
mvc/
  controllers/         # Controladores (lógica de negócio)
  models/              # Modelos (dados e regras de negócio)
  views/               # Views (arquivos EJS para renderização)
  routes/              # Rotas (gerenciamento de endpoints)
  server.js            # Arquivo principal

```
## Instalação
### Clone o repositório:
```
git clone https://github.com/DiegoOtani/exemplo_mvc.git
cd mvc
```
### Instale as dependências:

```
npm install
```
### Inicie o servidor:
```
npm start
```
### Acesse a aplicação no navegador:

#### Página inicial (mensagem padrão):
http://localhost:3000/
#### Página com parâmetro dinâmico:
http://localhost:3000/?name=João

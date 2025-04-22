# 🙏 Site da Igreja Matriz N. Sra. da Imaculada Conceição

Universidade: Universidade do Vale do Itajaí (UNIVALI)  
Curso: Análise e Desenvolvimento de Sistemas  
Disciplina: Software Design  
Professor: Maurício Pasetto de Freitas

---

## 📌 Propósito do Projeto

Este projeto foi desenvolvido como parte da disciplina de Hands On Work com o objetivo de aplicar conceitos de prototipação, responsividade, lógica de programação e organização de conteúdo para uma solução web voltada à comunidade religiosa. O site tem como foco divulgar informações da paróquia, cronograma de eventos e um mural de fotos para maior engajamento dos fiéis.

---

## 🛠️ Funcionalidades Implementadas

✅ Página inicial com informações da paróquia  
✅ Mural de fotos com imagens da igreja e eventos  
✅ Cronograma de eventos atualizados dinamicamente  
✅ Painel administrativo para cadastro e edição de eventos  
✅ Sistema de login administrativo  
✅ Design responsivo utilizando Bootstrap 5  
✅ Informações de contato e localização integradas ao Google Maps  

---

## 🧩 Tecnologias Utilizadas

🧑‍💻 **FrontEnd**
    - HTML5  
    - CSS3 (Com flexbox, grid layout e media queries para responsividade)  
    - Bootstrap 5
    - JavaScript
🛠️ **Back-End**   
    - Node.js
    - Express
    
☁️ **Deploy**  
- Heroku – Plataforma utilizada para hospedar a aplicação web

---

## 📁 Estrutura do Projeto

```
📦 ParoquiaBombinhas
├── app.js                           # Inicialização do server
├── public/                          # Front-End
|   ├── views/
|   |   ├── index.html               # Página inicial com informações e mapa
|   |   ├── mais.html                # Galeria de fotos e informações gerais da igreja
|   |   ├── events.html              # Página de cronograma de eventos
|   |   ├── admin.html               # Painel administrativo de eventos
|   |   ├── login.html               # Tela de login para administradores
|   |   ├── edit-event.html          # Painel de edição de evento
|   |   └── 404.html                 # Página de erro 404
|   ├── css/
|   |   ├── main.css                 # Estilos principais 
|   |   ├── event.css                # Estilos exclusivos da página de eventos
|   |   ├── mural.css                # Estilos exclusivos da página de eventos
|   |   ├── login.css                # Estilos exclusivos da página de login
|   |   └── 404.css                  # Estilos da página de Erro 404
|   ├── js/
|   │   ├── main.js                  # Script principal
|   |   ├── events.js                # Script que consome dados de eventos armazenados em /src/data/events.json
|   |   ├── login.js                 # Script de validação de username e password do administrador
|   │   ├── events.js                # Script de exibição de eventos
|   |   └── edit-events.js           # Script para receber dados de edição de um evento, e enviar para o backend
|   ├── dist/
|   │   ├── admin.bundle.js          # Script conversor gerado com Webpack do arquivo js/admin.js
|   │   └── editEvent.bundle.js      # Script conversor gerado com Webpack do arquivo js/edit-event.js
|   ├── imgs/
|   │   ├── logo-paroquia.png        # Logo da igreja
|   │   ├── favicon.ico              # Ícone do site
|   |   └── (outras imagens da galeria)
|
├── src/                             # Back-End
|   ├── controller/
|   |   ├── static.js                # Apenas envio da página estática
|   |   ├── admin.js                 # Todo o controle das funcionalidades de renderizar, criar, editar e remover eventos
|   |   └── 404.js                   # Controller e router da página de erro
|   ├── routes/
|   |   ├── static.js                # Router das páginas estáticas
|   |   └── admin.js                 # Router de requests área do administrador
|   ├── data/
|   |   ├── admin.json           
|   |   └── events.json              # Arquivo onde eventos são armazenados
|
├── .tool-versions                   # Controle de versão de dependências com asdf (Estou utilizando Arch linux no WSL 2)
├── procfile                         # Comando de iniciação do servidor informado ao heroku para ser excutado
├── webpack.config.js                # Configuração para conversão de arquivos js
├── node_modules/                    # Dependências instaladas com npm (Ex: bootstrap, babel, nodemon, eslint, uuid, concurrently, flatpickr)
├── package.json                     # Configurações do projeto e dependências
└── package-lock.json                # Controle de versões das dependências
```

---

## 🧠 Resumo Acadêmico

Projeto de um site institucional para igreja católica local, promovendo acessibilidade à informação, integração com a comunidade e administração facilitada de eventos. A solução incorpora princípios de design limpo, estrutura semântica, acessibilidade e uso de bibliotecas modernas como o Bootstrap para garantir responsividade e usabilidade.

---

## 📅 Entrega Final: 24/04 - Hands On Work (Documentação em PDF único, com link do site no ar.)

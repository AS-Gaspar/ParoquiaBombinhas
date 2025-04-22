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

🧑‍💻 **Frontend**
- HTML5  
- CSS3 
- Bootstrap 5  
- JavaScript

🛠️ **Backend**  
- Node.js  
- Express 
- JSON como armazenamento local simulado (substituindo um banco de dados)

☁️ **Deploy**  
- Heroku – Plataforma utilizada para hospedagem da aplicação

---

## 📁 Estrutura do Projeto

```
📦 ParoquiaBombinhas
├── app.js                           # Ponto de entrada da aplicação – inicializa o servidor Express
│
├── public/                          # Frontend (arquivos estáticos servidos ao cliente)
│   ├── views/                       # Páginas HTML da aplicação
│   │   ├── index.html               # Página inicial com informações e mapa
│   │   ├── mais.html                # Galeria de fotos e informações gerais da igreja
│   │   ├── events.html              # Página com o cronograma de eventos
│   │   ├── admin.html               # Painel administrativo para gerenciar eventos
│   │   ├── login.html               # Tela de login para administradores
│   │   ├── edit-event.html          # Tela de edição de evento
│   │   └── 404.html                 # Página de erro personalizada (404)
│   │
│   ├── css/                         # Arquivos de estilo
│   │   ├── main.css                 # Estilos globais da aplicação
│   │   ├── event.css                # Estilos específicos da página de eventos
│   │   ├── mural.css                # Estilos adicionais para a galeria/eventos
│   │   ├── login.css                # Estilos da tela de login
│   │   └── 404.css                  # Estilos da página de erro
│   │
│   ├── js/                          # Scripts JavaScript do frontend
│   │   ├── main.js                  # Script principal da aplicação
│   │   ├── events.js                # Exibe os eventos carregados de /src/data/events.json
│   │   ├── login.js                 # Validação de login do administrador
│   │   └── edit-events.js           # Envio e recebimento de dados de edição de eventos
│   │
│   ├── dist/                        # Scripts otimizados gerados com Webpack
│   │   ├── admin.bundle.js          # Versão compactada de admin.js
│   │   └── editEvent.bundle.js      # Versão compactada de edit-events.js
│   │
│   ├── imgs/                        # Recursos visuais utilizados no site
│   │   ├── logo-paroquia.png        # Logotipo da igreja
│   │   ├── favicon.ico              # Ícone da aba do navegador
│   │   └── (outras imagens da galeria)
│
├── src/                             # Backend (lógica da aplicação e API)
│   ├── controller/                  # Controladores com regras de negócio
│   │   ├── static.js                # Serve páginas estáticas
│   │   ├── admin.js                 # CRUD de eventos (criar, editar, remover, listar)
│   │   └── 404.js                   # Tratamento da rota de erro (404)
│   │
│   ├── routes/                      # Definição das rotas da aplicação
│   │   ├── static.js                # Rotas públicas e estáticas
│   │   └── admin.js                 # Rotas da área administrativa
│   │
│   ├── data/                        # Base de dados local (JSON)
│   │   ├── admin.json               # Dados de autenticação de administradores
│   │   └── events.json              # Lista de eventos armazenados
│
├── .tool-versions                   # Define versões de Node e outras ferramentas (usado com asdf; ambiente Arch Linux via WSL2)
├── Procfile                         # Comando de inicialização utilizado pelo Heroku para deploy
├── webpack.config.js                # Configuração do Webpack para empacotamento dos scripts JS
├── node_modules/                    # Dependências instaladas com npm
├── package.json                     # Configuração principal do projeto e dependências
└── package-lock.json                # Mapeamento exato das versões das dependências instaladas
```

---

## 🧠 Resumo Acadêmico

Projeto de um site institucional para igreja católica local, promovendo acessibilidade à informação, integração com a comunidade e administração facilitada de eventos. A solução incorpora princípios de design limpo, estrutura semântica, acessibilidade e uso de bibliotecas modernas como o Bootstrap para garantir responsividade e usabilidade.

---

## 📅 Entrega Final: 24/04 - Hands On Work (Documentação em PDF único, com link do site no ar.)

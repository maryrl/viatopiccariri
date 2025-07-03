<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
Claro! Aqui está um modelo completo de `README.md` para o seu projeto de **simulador de transporte público acessível**, usando **React + Material UI + JSON Server**. Você pode ajustar conforme evoluir o projeto.

---

````markdown
# 🚍 Transporte Fácil

Um projeto fullstack com foco em acessibilidade urbana, permitindo que usuários busquem rotas de transporte público (ônibus, vans etc.), simulem viagens futuras e salvem rotas favoritas. Ideal para trabalhadores, estudantes e idosos que dependem de transporte público.

---

## ✨ Funcionalidades

- 🔍 **Buscar Rota** com origem e destino
- 🧠 **Simulação de Viagem** com previsão de custo e tempo
- ❤️ **Rotas Favoritas** para acesso rápido
- 📱 Interface responsiva e amigável com Material UI
- 🔗 API REST simulada com JSON Server

---

## 📦 Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

### Backend Simulado
- [JSON Server](https://github.com/typicode/json-server)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/transporte-facil.git
cd transporte-facil
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o frontend

```bash
npm run dev
```

### 4. Inicie a API (JSON Server)

```bash
npm run api
```

---

## 🗂 Estrutura de Pastas

```
src/
├── pages/         # Telas principais (Home, BuscaRota, Simulacao, Favoritos)
├── components/    # Componentes reutilizáveis (em breve)
├── services/      # Axios + API configs
├── App.jsx        # Configuração de rotas
└── main.jsx       # Entrada da aplicação
```

---

## 🔧 Scripts disponíveis

| Comando       | Função                             |
| ------------- | ---------------------------------- |
| `npm run dev` | Inicia o frontend React/Vite       |
| `npm run api` | Inicia o JSON Server na porta 3001 |

---

## 🛠 Próximos Passos

* Integração com backend real (Node.js ou Firebase)
* Sistema de login para salvar favoritos
* Geolocalização automática
* Estimativas com dados reais de transporte (API externa)

---

## 👩‍💻 Feito por

Desenvolvido por \[Maria Rodrigues] como parte de portfólio e preparação para o mercado de trabalho.
Inspirado pela vontade de resolver problemas reais com tecnologia.

---
# 🌤️ EA-Weather — Previsão Meteorológica em Tempo Real

O **EA-Weather** é uma aplicação web moderna de previsão meteorológica desenvolvida para fornecer dados climáticos precisos e instantâneos. O projeto consome de forma assíncrona a API OpenWeather, tratando fluxos complexos de estados de carregamento (loading), respostas nulas e erros de rede.

**🔗 Link do Projeto Ativo:** [ea-clima.vercel.app](https://vercel.app)

---

## 🚀 Funcionalidades Principais

*   **Pesquisa Dinâmica por Cidade:** Procura dados meteorológicos de qualquer localização global em tempo real.
*   **Tratamento de Estados de UI (UX):** Implementação de *skeletons* e indicadores de carregamento durante as requisições HTTP, evitando quebras visuais para o utilizador.
*   **Gestão de Erros Robusta:** Mensagens amigáveis caso a cidade não seja encontrada ou ocorra uma falha de ligação com o servidor externo.
*   **Design Responsivo Fluido:** Interface totalmente adaptada para dispositivos móveis e desktop, utilizando uma abordagem utilitária.

---

## 🛠️ Stack Tecnológica

*   **Framework:** React.js (com Vite)
*   **Linguagem:** TypeScript (Tipagem estática estrita para evitar erros em runtime)
*   **Estilização:** Tailwind CSS (Estilização baseada em utilitários focada em performance)
*   **API Externa:** OpenWeather API (Consumo assíncrono através de Fetch/Axios)

---

## 🧠 Desafios Técnicos & Aprendizagens

Desenvolver este sistema permitiu solidificar conceitos avançados do ecossistema React e TypeScript:
1.  **Consumo Assíncrono Seguro:** Manipulação do ciclo de vida de componentes React com `useEffect` e tratamento de concorrência nas requisições.
2.  **Segurança de Tipos:** Criação de interfaces TypeScript rigorosas para mapear a resposta JSON complexa da API OpenWeather, garantindo autocompilação estável e prevenção de propriedades `undefined`.

---

## ⚙️ Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. Clone o repositório:
   ```bash
   git clone https://github.com
   ```

2. Entre na pasta do projeto:
   ```bash
   cd EA-Clima
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador no endereço indicado (geralmente `http://localhost:5173`).

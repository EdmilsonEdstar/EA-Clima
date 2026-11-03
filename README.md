# 🌤️ EA-Weather — Previsão Meteorológica em Tempo Real

### Consulta meteorológica global com React, TypeScript e OpenWeather API

O **EA-Weather** é uma aplicação web de previsão meteorológica desenvolvida para disponibilizar informação climática de forma rápida, intuitiva e acessível.

A aplicação permite pesquisar cidades e consultar condições meteorológicas em tempo real, através da integração com a **OpenWeather API**.

O projeto foi desenvolvido com React e TypeScript, com especial atenção ao consumo assíncrono de APIs, à gestão de estados da interface, ao tratamento de erros e à experiência de utilização em diferentes dispositivos.

**🔗 Aplicação online:** [EA-Weather](https://ea-clima.vercel.app)

---

## 🎯 Objetivos do projeto

- Desenvolver uma aplicação de consulta meteorológica em tempo real.
- Permitir a pesquisa de cidades em diferentes localizações do mundo.
- Integrar uma API externa para obtenção de dados meteorológicos.
- Apresentar informação de forma clara e intuitiva.
- Implementar uma gestão robusta dos estados de carregamento e erro.
- Criar uma interface responsiva, adaptada a desktop e dispositivos móveis.
- Consolidar conhecimentos de React, TypeScript e consumo de APIs REST.

---

## ✨ Funcionalidades principais

### 🔎 Pesquisa dinâmica por cidade

Permite pesquisar cidades de diferentes partes do mundo e obter informação meteorológica atualizada através da OpenWeather API.

### ⏳ Gestão dos estados de carregamento

Implementação de indicadores visuais de carregamento (*skeletons* e loading states) durante as requisições HTTP, proporcionando uma experiência de utilização mais fluida e evitando alterações bruscas na interface.

### ⚠️ Tratamento de erros

A aplicação contempla situações como:

- Cidade não encontrada.
- Respostas sem dados disponíveis.
- Falhas de ligação à API.
- Erros durante as requisições HTTP.

As situações de erro são apresentadas através de mensagens compreensíveis para o utilizador.

### 📱 Design responsivo

Interface adaptável a diferentes dimensões de ecrã, permitindo a utilização em computadores, tablets e smartphones.

### 🌐 Integração com API externa

Consumo assíncrono da OpenWeather API para obtenção de informação meteorológica em tempo real.

---

## 🛠️ Stack tecnológica

O EA-Weather foi desenvolvido utilizando tecnologias modernas do ecossistema JavaScript.

| Tecnologia | Utilização |
|---|---|
| React.js | Construção da interface e componentes |
| Vite | Ambiente de desenvolvimento e build |
| TypeScript | Tipagem estática e segurança do código |
| Tailwind CSS | Estilização da interface |
| OpenWeather API | Obtenção dos dados meteorológicos |
| Fetch / Axios | Comunicação HTTP assíncrona |

---

## 🧠 Desafios técnicos e aprendizagens

O desenvolvimento do EA-Weather permitiu aprofundar conhecimentos importantes no desenvolvimento de aplicações web com React e TypeScript.

### 1. Consumo assíncrono de APIs

Implementação de requisições HTTP para obtenção de dados meteorológicos, utilizando os mecanismos assíncronos do JavaScript e o ciclo de vida dos componentes React através de `useEffect`.

Foi dada especial atenção à gestão dos estados de carregamento, sucesso e erro, bem como ao comportamento das requisições durante alterações de pesquisa.

### 2. Tipagem e segurança com TypeScript

Criação de interfaces e tipos para representar a estrutura das respostas JSON da OpenWeather API.

A utilização de tipagem estática ajuda a identificar inconsistências durante o desenvolvimento e reduz o risco de acesso a propriedades inexistentes ou valores inesperados.

### 3. Gestão dos estados da interface

Implementação de diferentes estados visuais para garantir uma experiência consistente durante a obtenção e apresentação dos dados meteorológicos.

### 4. Experiência de utilização

Desenvolvimento de uma interface responsiva, com indicadores visuais e mensagens de erro que permitem ao utilizador compreender o estado da aplicação.

---

## ⚙️ Como executar localmente

Para executar o EA-Weather no teu computador, precisas de ter o **Node.js** e o **npm** instalados.

### 1. Clonar o repositório

```bash
git clone https://github.com/UTILIZADOR/EA-Clima.git
```

### 2. Entrar na pasta do projeto

```bash
cd EA-Clima
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar a OpenWeather API

A aplicação utiliza a OpenWeather API para obter informação meteorológica.

Caso o projeto utilize uma chave de API através de uma variável de ambiente, configura-a num ficheiro `.env`, utilizando o nome de variável esperado pelo código da aplicação.

Não publiques a tua chave privada no repositório GitHub.

### 5. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

### 6. Abrir a aplicação no navegador

Por defeito, o Vite disponibiliza a aplicação no seguinte endereço:

```text
http://localhost:5173
```

### 7. Criar uma versão de produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

---

## 🚀 Publicação

O EA-Weather encontra-se publicado através da plataforma **Vercel**.

🔗 **Aplicação online:** [ea-clima.vercel.app](https://ea-clima.vercel.app)

---

## 📂 Organização do projeto

A aplicação segue uma arquitetura baseada em React, com separação de componentes e lógica da interface.

A estrutura detalhada das pastas e ficheiros poderá ser acrescentada de acordo com a organização atual do repositório.

---

## 🔮 Possíveis evoluções

Entre as melhorias que poderão ser consideradas para futuras versões encontram-se:

- Apresentação de previsões meteorológicas para vários dias.
- Informação meteorológica por hora.
- Geolocalização para consultar automaticamente a meteorologia da localização do utilizador.
- Histórico das cidades pesquisadas.
- Sistema de cidades favoritas.
- Apresentação de indicadores meteorológicos adicionais.
- Melhorias na acessibilidade e experiência de utilização.

---

## 📌 Estado do projeto

**Publicado — EA-Weather**

Projeto desenvolvido para consolidar competências em React, TypeScript, Vite, Tailwind CSS e integração de APIs externas.

---

## 📄 Licença

A licença de utilização e distribuição do projeto ainda não foi especificada.

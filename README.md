# 📊 Projeto de Análise de Dados com WebdriverIO + Allure Report  

## 📝 Descrição  
Este projeto realiza **análises de dados automatizadas** utilizando **WebdriverIO (WDIO)** e **Mocha**, com geração de relatórios interativos via **Allure Report**.  
Ele pode ser utilizado como base para automações que envolvem leitura, validação e análise de arquivos (ex.: CSV), garantindo a qualidade dos dados.  

---

## 🛠️ Tecnologias Utilizadas
- Node.js  
- WebdriverIO  
- Mocha Framework  
- Allure Reporter  
- Chromedriver  
- CSV-Parse  

---

## 📂 Estrutura do Projeto

ANALISE-DE-DADOS-WDIO/
│
├── data/ # Arquivos de dados para análise
├── test/
│ ├── pageobjects/ # Page Objects (se utilizados)
│ └── specs/ # Casos de teste
│
├── allure-results/ # Resultados brutos do Allure
├── wdio.config.js # Configuração do WDIO
├── package.json # Scripts e dependências
└── README.md # Documentação do projeto

---

## ⚙️ Instalação 
npm install


### Clone o repositório:
```bash
git clone https://github.com/seu-usuario/analise-de-dados-wdio.git
cd analise-de-dados-wdio

---

▶️ Como Executar os Testes

✅ Executar os testes:
bash
Copiar
Editar
npm test

✅ Gerar o relatório Allure:
bash
Copiar
Editar
npm run allure:generate

✅ Abrir o relatório Allure:
bash
Copiar
Editar
npm run allure:open

---

📌 Fluxo do Projeto
Leitura de Dados: os arquivos em data/ são processados pelos testes.

Execução dos Testes: scripts organizados na pasta test/specs validam e processam as informações.

Relatório Interativo: após a execução, o Allure gera um relatório acessível no navegador.

---

🚀 Possíveis Melhorias Futuras

Integração com CI/CD (ex.: GitHub Actions, Jenkins)

Expansão dos cenários de validação

---

👤 Autor
👨‍💻 Rafael Fossali
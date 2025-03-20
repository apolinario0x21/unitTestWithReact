# Unit Testing with React

## Projeto de Testes Unitários com React
Este projeto é dedicado à implementação de testes unitários em componentes React utilizando as ferramentas mais modernas e eficientes do ecossistema JavaScript. O objetivo principal é garantir a robustez e a confiabilidade dos componentes através de testes automatizados.

## 🚀 Start
Siga as instruções abaixo para configurar e executar o projeto localmente.

## 📋 Pré-requisitos
   - Node.js instalado (versão 12 ou superior)
   - npm ou yarn (gerenciadores de pacotes)

## 🔧 Instalação
Clone o repositório:
```bash
git clone https://github.com/apolinario0x21/unitTestLab.git
```

## Navegue até o diretório do projeto:
```bash
pwd
cd unitTestWithReact /src/
```

## Instale as dependências:
```bash
npm install
yarn install
```

## Instalações Adicionais
Para configurar o ambiente de desenvolvimento e testes, você precisará instalar algumas dependências adicionais.
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @testing-library/user-event
```

## ⚙️ Configuração
Adicionando um script para rodar os testes no package.json:
```jsx
"scripts": {
    "test": "vitest"
}
```

## 🧪 Executando os Testes
Executando os testes
```bash
npm run test
yarn run test
```

## 📂 Estrutura do Projeto
```bash
unitTestWithReact/
├── node_modules/ 
├── public/ 
├── src/ 
│ ├── assets/ 
│ ├── Components/ 
│ │ ├── Button.jsx 
│ │ └── Button.test.jsx 
│ ├── App.css 
│ ├── App.jsx 
│ ├── index.css 
│ ├── main.jsx 
│ └── setupTests.js 
├── .gitignore
├── eslint.config.js 
├── index.html 
├── package.json 
├── package-lock.json 
├── README.md 
├── vite.config.js
└── vitest.config.js 
```

## 🛠️ Tecnologias Usadas
- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Vite: Ferramenta de build rápida para desenvolvimento moderno.
- Vitest: Framework de testes rápido e moderno.
- Jest: Framework de testes para JavaScript.
- Testing Library: Biblioteca para testar componentes React.
- ESLint: Ferramenta de linting para garantir a qualidade do código. 


## 📝 Exemplo de Teste
Testando o componente ```Button```: 
```jsx
    it('Deve chamar a função onClick quando clicado', async () => {
        const handleClick = vi.fn(); 
        render(<Button onClick={handleClick}>Click Me</Button>);
        const buttonElement = screen.getByTestId('button');
        await userEvent.click(buttonElement); 
        expect(handleClick).toHaveBeenCalledTimes(1); 
    });
```

## 🤝 Contribuição
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga os passos abaixo:
- Faça um fork do projeto.
- Crie uma nova branch (git checkout -b feature/nova-feature).
- Commit suas mudanças (git commit -m 'Adiciona nova feature').
- Push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

## 📄 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](https://github.com/apolinario0x21/unitTestWithReact/blob/main/LICENSE) para mais detalhes.
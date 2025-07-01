# Digital Store - E-commerce de Moda Urbana

![Digital Store Home Page](https://i.imgur.com/example.png) Bem-vindo à Digital Store, um projeto de e-commerce moderno construído com as tecnologias mais recentes, incluindo Next.js, React, TypeScript e Tailwind CSS. Esta aplicação simula uma loja virtual de moda urbana, focada em performance, componentização e uma ótima experiência de desenvolvimento.

## ✨ Funcionalidades

- **Páginas Dinâmicas com App Router**: A estrutura do projeto utiliza o App Router do Next.js para criar páginas estáticas e renderizadas no servidor.
  - Página Inicial (`/`)
  - Listagem de Produtos (`/products`)
  - Detalhes do Produto (`/products/[id]`)/page.tsx]
- **Filtragem e Pesquisa Server-Side**: A lógica de busca e filtragem de produtos é executada no servidor para melhor performance, atualizando a URL com os parâmetros de busca.
- **Componentes Reutilizáveis**: Interface construída com um sistema de componentes modulares e reutilizáveis, seguindo as melhores práticas do React.
- **UI com shadcn/ui & Tailwind CSS**: Estilização moderna e consistente utilizando Tailwind CSS e um conjunto de componentes baseados no [shadcn/ui](https://ui.shadcn.com/).
- **Design Responsivo**: A interface se adapta perfeitamente a diferentes tamanhos de tela, de dispositivos móveis a desktops.
- **Pronto para Backend**: O projeto utiliza dados mockados, mas já possui uma estrutura com Prisma configurada, facilitando a transição para um banco de dados real.

## 🚀 Começando

Siga as instruções abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/digital-store.git](https://github.com/seu-usuario/digital-store.git)
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd digital-store/front
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o comando:
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🛠️ Tecnologias Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **ORM**: [Prisma](https://www.prisma.io/) (configurado, mas usando dados mockados)
- **Ícones**: [Lucide React](https://lucide.dev/)

## 📂 Estrutura do Projeto

```
front/
├── app/                  # Rotas e páginas (App Router)
│   ├── (pages)/
│   │   ├── products/
│   │   │   ├── [id]/page.tsx  # Página de detalhes do produto
│   │   │   └── page.tsx       # Página de listagem de produtos
│   │   └── page.tsx         # Página inicial
│   └── layout.tsx           # Layout principal
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes base do shadcn/ui
│   └── (custom)/         # Componentes customizados (Header, Footer, ProductCard, etc.)
├── hooks/                # Hooks customizados do React
├── lib/                  # Funções utilitárias, tipos e manipulação de dados
│   ├── data.ts           # Funções de busca de dados (abstração)
│   ├── db.ts             # Configuração do cliente Prisma
│   ├── mock-data.ts      # Dados mockados
│   └── types.ts          # Definições de tipos TypeScript
└── public/               # Arquivos estáticos (imagens, fontes, etc.)
```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia um servidor de produção.
- `npm run lint`: Executa o linter para verificar a qualidade do código.

---
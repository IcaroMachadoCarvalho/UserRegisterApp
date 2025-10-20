<h3 align="center" style="margin-top: 48px;">UserRegisterApp - Aplicação full-stack de login</h3>

<div align="center">    
  <img style="margin: 0 auto;" src="https://github.com/user-attachments/assets/1b448d31-2bcc-43b3-93b4-f006e506a75f" alt="Project Banner">
  </div>
 
   <div align="center">
     Uma aplicação de registro de usuários com autenticação Json Web Token. 
    </div>

## 📑 Índice

1.  [Sobre o projeto](#sobre-o-projeto)
2.  [Tecnologias utilizadas](#tecnologias-utilizadas)
3.  [Instalação](#instalação)
4.  [Uso](#uso)
5.  [Funcionalidades](#funcionalidades)
6.  [Contato](#contato)

## 💡 <a name="sobre-o-projeto"> Sobre o projeto</a>

Este projeto é uma aplicação de registro de usuários, desenvolvida com foco em UX/UI, responsividade e na funcionalidades. A principal finalidade da aplicação é permitir que os usuários se cadastrem, façam login e gerenciem seus respectivos acessos pessoais de forma simples e segura.

## ⚙️ <a name="tecnologias-utilizadas">Tecnologias utilizadas</a>

As principais tecnologias utilizadas no desenvolvimento:

- **HTML5:** Estruturação da página.
- **TailwindCSS:** Estilização customizada, com foco em um design responsivo e de fácil manutenção.
- **Angular:** Implementação de funcionalidades dinâmicas e interativas no front-end, garantindo uma experiência de usuário fluida.
- **Javascript**: Utilizado tanto no front-end quanto no back-end para implementar funcionalidades como autenticação, controle de fluxo e validação de dados.
- **Express:** Framework para o backend, responsável pela criação de APIs e gestão das requisições relacionadas ao registro, login e gerenciamento de usuários.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar informações de usuários de forma escalável e flexível.
- **Versionamento:** Git e GitHub foram empregados para o controle de versões, permitindo um desenvolvimento colaborativo e eficiente.

## 🛠 <a name="instalação">Instalação</a>

Para visualizar com mais detalhes localmente, siga os passos abaixo:

**Pré requisitos**

Este é um projeto web estático, sem dependências de _runtime_ (como Node.js), mas você precisa ter o Git instalado.

- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/products/platform/atlas-database)

**Clone o Repositório**

1.  Clone o repositório:

    ```bash
    git clone https://github.com/IcaroMachadoCarvalho/UserRegisterApp.git

    ```

2.  Crie um cluster no MongoDB Atlas com sua conta

3.  Crie o arquivo de variáveis de ambiente .env na pasta do backend
    ```bash
    cd backend
    touch .env
    ```
4.  Preencha o .env com os respectivos valores

    ```bash
    PORT=3000
    MONGO_URL=coloque a url gerada do cluster
    JWT_SECRET=qualquer valor da sua preferência
    ```

## 💻 <a name="uso">Uso</a>

1.  Entre na pasta do projeto clonado ou baixado.
2.  Abra 2 terminais na pasta do projeto.
3.  O primeiro terminal use os seguintes comandos.

```bash
   cd backend
   npm run dev
```

4. O Segundo terminal use os seguintes comandos.

```bash
  cd frontend
  ng serve
```

5. Abra o link gerado no terminal ou crtl + click esquerdo do mouse.

## ✨ <a name="funcionalidades">Funcionalidades</a>

O projeto inclui as seguintes funcionalidades:

- **Design Responsivo:** A aplicação foi desenvolvida para ser compatível com dispositivos móveis e desktops, garantindo uma experiência consistente e fluida em diferentes tamanhos de tela.
- **Angular Material:** Utilizado para criar snackbars interativos, fornecendo mensagens de aviso e confirmação para os usuários de forma clara e não intrusiva. Também foram implementados loaders para indicar o carregamento de dados, melhorando a experiência do usuário durante o processo de autenticação e navegação..
- **Guards para Rotas Protegidas:** Implementação de Guards no Angular para proteger rotas e garantir que apenas usuários autenticados possam acessar áreas restritas da aplicação, como a página Home. Isso assegura que apenas quem possui uma conta consiga navegar para essas páginas específicas.
- **TailwindCSS com PostCSS:** Utilizado para a criação de um design moderno e responsivo, com a vantagem de garantir compatibilidade entre navegadores. O uso do PostCSS também permite otimizar e processar o CSS, melhorando a performance da aplicação.
- **Autenticação com JWT e Criptografia de Senha:** O backend utiliza JWT (JSON Web Token) para autenticação segura e gerenciamento de sessões de usuário. A senha do usuário é criptografada antes de ser armazenada no banco de dados, garantindo que as informações sensíveis fiquem protegidas contra acessos não autorizados.

## 🤝 <a name="contato">Contato</a>

Caso queira entrar em contato, use as informações do meu perfil:

- **Nome:** Ícaro Machado de Carvalho
- **LinkedIn:** [in/ícaromachadodecarvalho](www.linkedin.com/in/ícaromachadodecarvalho)
- **GitHub:** [@IcaroMachadoCarvalho ](https://github.com/IcaroMachadoCarvalho)

# Bons Fluídos News Management

Este repositório contém o código-fonte e a documentação relacionados ao sistema de cadastro e distribuição de notícias para o projeto "Bons Fluídos" da UTFPR.

## Visão Geral

O sistema de cadastro e distribuição de notícias é uma parte crucial do projeto "Bons Fluídos", pois possibilita o compartilhamento eficaz de informações relevantes com os apoiadores, voluntários, interessados e beneficiários da UTFPR. Ele oferece uma plataforma centralizada para a equipe gerenciar e publicar notícias, mantendo todos os envolvidos atualizados sobre as atividades do projeto.

## Tecnologias utilizadas

### Ferramentas de Desenvolvimento

- **[Next.js](https://nextjs.org/):** Framework React para construção de interfaces web. Versão: 5.0.0

- **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS para estilização rápida e responsiva. Versão: 5.0.0

- **[Firebase](https://firebase.google.com/):** Plataforma para desenvolvimento e hospedagem de aplicativos. Versão: 9.0.0

### Base de Dados

- **[Firebase Firestore](https://firebase.google.com/docs/firestore?hl=pt-br):** Plataforma para desenvolvimento e hospedagem de aplicativos. Versão: 9.0.0

## Como Compilar e Executar o Sistema Localmente

### Roteiro para Configuração do Ambiente

Para executar o projeto localmente, siga estas etapas:

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema. versão 18.15.0

2. Clone este repositório para o seu computador:

```bash
git clone https://github.com/GustavoLuche/bons-fluidos-news-management.git
```

3. Navegue até o diretório do projeto:

```bash
cd bons-fluidos-news-management/
```

4. Instale as dependências usando o npm:

```bash
npm install
```

5. Inicie a aplicação:

```bash
npm start
```

A aplicação será executada no modo de desenvolvimento. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

### Roteiro para Base de Dados

1. A base de dados é gerenciada pelo Firebase Firestore.
2. Não são necessárias configurações adicionais, pois o acesso ao Firestore é feito automaticamente pelo Firebase.

## Como Testar o Sistema

### Funcionalidades Principais

#### Administração

- **Novo Admin**: Página para gerenciar novos administradores do sistema.

- **Novo Artigo**: Página para adicionar novos artigos a página.

- **Gerenciar**: Página principal para funções administrativas.

#### Autenticação

- **Entrar**: Página de login para acesso ao sistema.

- **Registrar**: Página de registro para novos usuários.

#### Páginas Comuns

- **Sobre nós**: Informações sobreo projeto e a equipe.

- **Início**: Página para visualização de artigos.

- **Newsletter**: Página para cadastro na newsletter.

### Roteiro para Testes

1. Acesse a página de login.

2. Utilize as credenciais fornecidas pela equipe de desenvolvimento ou registre uma nova conta.

3. Após o login, explore as diferentes páginas disponíveis, incluindo a administração de artigos.

### Contas de Acesso Padrão

- Administrador:
    - Email: admin@example.com
    - Senha: admin123

- Usuário Comum:
    - Email: user@example.com
    - Senha: user123

## Equipe de Desenvolvimento

- [Gustavo Grilo Luche](https://github.com/GustavoLuche)

- [Ian da Silva Correia](https://github.com/ianDesc)

- [Kainã de Freitas Richalski](https://github.com/krichalski)

- [Matheus Peres Medeiros Barreto](https://github.com/matheuspmb)

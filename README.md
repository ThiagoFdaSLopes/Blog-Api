# Blog Api
Neste projeto foi desenvolvido uma API e um banco de dados para a produção de conteúdo para um blog!

Foi desenvolvido uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Foi criado endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;

Para fazer um post é necessário usuário e login, portanto será trabalhada a relação entre user e post;

Será necessária a utilização de categorias para os posts, trabalhando, assim, a relação de posts para categories e de categories para posts.

## Stack utilizada
Back-end: Javascript, Node, Express,Sequelize, JWT, MySQL2, Docker

## Rodando O Docker
Rode os serviços node e db com o comando ```docker-compose up -d```.

Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers.

Esses serviços irão inicializar um container chamado ```blogs_api``` e outro chamado ```blogs_api_db```.
A partir daqui você pode rodar o container ```blogs_api``` via CLI ou abri-lo no VS Code.
Use o comando ```docker exec -it blogs_api bash```.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
Instale as dependências "Caso existam" com ```npm install```

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```bash
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```
Foram encontradas 2 possíveis soluções para este problema:
* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.

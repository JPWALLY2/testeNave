# Módulos
- Express: Dependências de produção da API.
- Nodemon: O Nodemon é uma dependência de desenvolvimento que vai executar o script do nosso servidor e observará mudanças, reiniciando-o quando necessário, assim evitamos ter que toda vez parar o nosso servidor e iniciá-lo novamente. 
- Mongoose: O Mongoose proporciona uma solução baseada em esquemas para modelar os dados da aplicação.


## Dificuldades
- Mudar o id: Por padrão o _id é um objectId mas eu gostaria de mudar para um id do tipo numero, criei um id com o plugin simple-autoincrement.

- Buscar as referencias: Nas rotas show dos Navers e Projects não consegui buscar a referencia do id de ambas, por padrão o populate pega o _id como path enão consegui mudar mesmo colocarndo outro path.

- Cadastrar o usuário logado: Na tabela naver e project não consegui cadastrar o id do usuario logado junto.

- Filtro: Não consegui fazertodos os filtros da rota navers/show, então ele só busca por name.

## Rotas Insomnia
### Users
- Signup: http://127.0.0.1:8080/signup
- Index(rota de teste): http://127.0.0.1:8080/users
- Login: http://127.0.0.1:8080/login

### Navers
- Store: http://127.0.0.1:8080/store
- Index: http://127.0.0.1:8080/index/name
- Update: http://127.0.0.1:8080/update/id
- Delete: http://127.0.0.1:8080/delete/id
- Show: http://127.0.0.1:8080/show/id

### Projects

- Store: http://127.0.0.1:8080/project/store
- Index: http://127.0.0.1:8080/project/index/name
- Update: http://127.0.0.1:8080/project/update/id
- Delete: http://127.0.0.1:8080/project/delete/id
- Show: http://127.0.0.1:8080/project/show/id

## Explicação
# Rotas User
- Sigunp: Cadastra o name e password informado no formato JSON e retorna os dados.
- Login: O usuario logado informa o name e password para logar no formato JSON , retorna os dados e um token de usuario logado.

# Rotas Navers
Estas rotas só são acessíveis se o usuario estiver logado, para logar para as rotas do naver é necessário colocar na aba Header um novo Header chamado Authorization e o value deve ser preenchido com a palavra Bearer e o token. Ex. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTU0OTI2NzMsImV4cCI6MTYxNTU3OTA3M30.mB14cmMMzxh4dqfIfSMV9Ym8Y2i8QJCzwyWtLp3Z2wI.
- Store: Cadastra o name, birthdate, admission_date, job_role e a referencia(id) do project, informado no formato JSON e retorna os dados.
- Index: Com um name informado no final da url (http://127.0.0.1:8080/index/name) retorna o registro que contem a palavra.
- Update: Com um id informado no final da url (http://127.0.0.1:8080/update/id), os dados para serem atualizados no formato JSON, faz a operação de update.
- Delete: Com um id informado no final da url (http://127.0.0.1:8080/delete/id), o registro correspondente será deletado.
- Show: Com um id informado no final da url (http://127.0.0.1:8080/delete/id), retorna o registro correspondente.

# Rotas Project
Estas rotas só são acessíveis se o usuario estiver logado, para logar para as rotas do project é necessário colocar na aba Header um novo Header chamado Authorization e o value deve ser preenchido com a palavra Bearer e o token. Ex. Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTU0OTI2NzMsImV4cCI6MTYxNTU3OTA3M30.mB14cmMMzxh4dqfIfSMV9Ym8Y2i8QJCzwyWtLp3Z2wI.
- Store: Cadastra o name,  e a referencia(id) do naver, informado no formato JSON e retorna os dados.
- Index: Com um name informado no final da url (http://127.0.0.1:8080/project/index/name) retorna o registro que contem a palavra.
- Update: Com um id informado no final da url (http://127.0.0.1:8080/project/update/id), os dados para serem atualizados no formato JSON, faz a operação de update.
- Delete: Com um id informado no final da url (http://127.0.0.1:8080/project/delete/id), o registro correspondente será deletado.
- Show: Com um id informado no final da url (http://127.0.0.1:8080/project/delete/id), retorna o registro correspondente.
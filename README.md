# Fuzzy

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


## Base commands UI
`nx serve appName`

`nx build appName` 

`nx test appName`

`nx lint appName`

`nx e2e appName`

## Base commands UI Lib
`nx test libName`

`nx lint libName`


## Base commands API
`nx build todo-api`

`nx serve todo-api`

`nx lint todo-api`

`nx lint todo-api`

## Swagger
`http://localhost:3333/api`

## Migrations
##### create in todo-api  
`nx run todo-api:typeorm-generate-migration {name}`
or
`npm run migrations:generate {name}`

#### run migrations for todo-api
`nx run todo-api:typeorm-run-migrations`
or
`npm run migrations:run`

##### example  
`typeorm migration:create -n initUserAndTodoTables -d ./src/migrations`

#### run in todo-api
`typeorm migration:run -- -d path-to-datasource-config`


## TODO
- is Joi needed?
- add helmet (csp, cors)
- crypt user password
- fix migrationsPath from config.yaml
- run migration. Help https://github.com/nestjs/nest/issues/4990#issuecomment-711444802
- nx and typeorm migrations https://www.thisdot.co/blog/setting-up-typeorm-migrations-in-an-nx-nestjs-project

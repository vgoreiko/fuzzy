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
`nx build my-nest-app`

`nx serve my-nest-app`

`nx lint my-nest-app`

`nx lint my-nest-lib`

## Swagger
`http://localhost:3333/api`

## Migrations
##### create in todo-api  
`typeorm migration:create -n {migrationName} -d {migrationFolder}`

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

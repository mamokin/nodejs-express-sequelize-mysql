https://github.dev/ibywaks/cookbook/tree/master
https://authjs.dev/getting-started/adapters/sequelize

Requires mysql server access and configuration via .env

Execute `npm run populateDb` to seed the database. Repeated execution may result in the creation of duplicate records.

Entity attribute interface types must:
- follow name convention I<EntityName>Attributes
- contain all known attributes
- be used minimally
  - only known use case is within sequelize model definitions
  - use ISomeEntityOutput

Do not modify database table rows in migration scripts unless absolutely necessary.
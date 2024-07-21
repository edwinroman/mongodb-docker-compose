db.getSiblingDB(process.env.MONGO_DB_DATABASE);

db.createUser({
  user: process.env.MONGO_DB_USERNAME,
  pwd: process.env.MONGO_DB_PASSWORD,
  roles: [
    {
      role: "dbOwner",
      db: process.env.MONGO_DB_DATABASE,
    }
  ],
});


db = new Mongo().getDB("admin");
db.grantRolesToUser(process.env.MONGO_INITDB_ROOT_USERNAME,
  [
    { role: "dbOwner", db: process.env.MONGO_DB_DATABASE }
  ]
);
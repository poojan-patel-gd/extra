module.exports = {
  // HOST: "localhost",
  // USER: "postgres",
  // PASSWORD: "Admin@123",
  // DB: "testdb",
  // dialect: "postgres",
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Admin@123",
    database: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

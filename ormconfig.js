module.exports = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "coffety",
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
        migrationsDir: "src/migrations",
    }
}
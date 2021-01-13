/* module.exports = {
    "type": "sqlite",
    "database": "./src/database/database.sqlite",
    "migrations": [
        "../dist/database/migrations/*.ts"
    ],
    "entities": [
        "./src/models/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }

    PARA USAR LOCAL COMENTE ABAIXO E 'DESCOMENTE' ESTE POIS FIZ COM SQLITE
} */

module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "migrations": [
        "dist/database/migrations/*.js"
    ],
    "entities": [
        "dist/models/*.js"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

export const configuration = {
    mongodb: {
        username: DB_USER,
        password: DB_PASSWORD,
        hostname: DB_HOST,
        port: DB_PORT,
        db: DB_NAME,
    }
}
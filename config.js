const PORT = process.env.PORT || 3000

const DB_HOST = process.env.DB_HOST || '10.10.0.7'

const DB_USER = process.env.DB_USER || 'sa'

const DB_PASSWORD = process.env.DB_PASSWORD || 'Sql2008'

const DB_NAME = process.env.DB_NAME || 'db_news_api'

const DB_PORT = process.env.DB_PORT || 1433

module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT };
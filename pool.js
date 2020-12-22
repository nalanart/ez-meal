const { Pool } = require('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'ez-meal',
  // password: 'postgres',
  // port: 5432
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

module.exports = pool
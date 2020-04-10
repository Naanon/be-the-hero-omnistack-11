const express = require('express')
const cors = require('cors')
const {errors} = require('celebrate')
const routes =  require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())

/**
 * Rota / Recurso
 */

/**
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" e geralmente servem para filtros, paginação.
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição utilizado para alterar ou criar recursos.
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: Select * From users
   * Query Builder: table('users').select('*').where()
   */

module.exports = app
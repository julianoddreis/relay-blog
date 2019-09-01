const fs = require('fs')
const path = require('path')
const api = require('../src/api')
const { printSchema } = require('graphql/utilities')
const { introspectSchema, makeRemoteExecutableSchema } = require('graphql-tools')
const { HttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')
const link = new HttpLink({ uri: api, fetch })

require('babel-polyfill')

async function init () {
  const schema = await introspectSchema(link)

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link
  })

  fs.writeFileSync(
    path.join(__dirname, '../schema.graphql'),
    printSchema(schema)
  )

  console.log(executableSchema)

  return executableSchema
}

init()

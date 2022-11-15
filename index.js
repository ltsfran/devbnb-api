import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { expressMiddleware } from '@apollo/server/express4'
import express from 'express'
import http from 'http'
import cors from 'cors'
import typeDefs from './graphql/typeDefs.js'
import resolvers from './graphql/resolvers.js'

const app = express()
const httpServer = http.createServer(app)
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageLocalDefault(),
    ApolloServerPluginDrainHttpServer({ httpServer })
  ],
  introspection: true
})

await server.start()

app.use(
  '/graphql',
  cors(),
  express.json(),
  expressMiddleware(server)
)

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))

console.log('🚀  Started server!')

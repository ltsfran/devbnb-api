import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const menuPaths = [
  {
    title: 'Mi Perfil',
    pathName: '/gestion/perfil',
    icon: 'user'
  },
  {
    title: 'Mis avisos',
    pathName: '/gestion/avisos-activos',
    icon: 'car'
  },
  {
    title: 'Cerrar Sesión',
    pathName: '/cuenta/logout',
    icon: 'logout'
  }
]

const typeDefs = `#graphql
  type Menu {
    title: String!
    pathName: String!
    icon: String!
  }

  type Query {
    menuPaths: [Menu]!
  }
`

const resolvers = {
  Query: {
    menuPaths: () => menuPaths
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`🚀  Server ready at: ${url}`)

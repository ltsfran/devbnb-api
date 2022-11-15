import { GraphQLError } from 'graphql'
import { menuPaths as menuPathsAPI } from './../api/menu.js'
import { accessToken as accessTokenAPI } from './../api/accessToken.js'

const resolvers = {
  Query: {
    menuPaths: () => menuPathsAPI
  },
  Mutation: {
    refreshToken: (root, args, context) => {
      const refreshToken = context.req.headers.refreshtoken || ''

      if (!refreshToken) {
        throw new GraphQLError('Parameter error in the service', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            http: { status: 400 }
          }
        })
      }

      return accessTokenAPI
    }
  }
}

export default resolvers

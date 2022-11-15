import { menuPaths } from './../api/menu.js'

const resolvers = {
  Query: {
    menuPaths: () => menuPaths
  }
}

export default resolvers

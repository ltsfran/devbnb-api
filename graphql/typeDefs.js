const typeDefs = `#graphql
  type Menu {
    """
    Menubar text
    """
    title: String!
    """
    Pathname to redirect
    """
    pathName: String!
    """
    Menubar icon
    """
    icon: String!
  }

  type AccessToken {
    """
    AccessToken
    """
    token: String!
    """
    Token to refresh accessToken and refreshToken
    """
    refreshToken: String!
  }

  type Query {
    """
    Get menu paths
    """
    menuPaths: [Menu]!
  }

  type Mutation {
    """
    Refresh accessToken and refreshToken
    """
    refreshToken: AccessToken!
  }
`

export default typeDefs

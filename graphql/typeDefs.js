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

  type Query {
    """
    Get menu paths
    """
    menuPaths: [Menu]!
  }
`

export default typeDefs

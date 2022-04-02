
export const GQL_MUTATION = `
type Mutation {
  addTask(token: String, title: String!): Task
  updateTask(token: String, id: Int!, title: String!): Task
  deleteTask(token: String, id: Int!): Task
  addToken(token: String): String
  addBookMark(title: String!, url: String!, bmCategoryId: Int, userId:String  ): BookMark
  updateBookMark(id: Int!, title: String!, url: String!, bmCategoryId: Int): BookMark
  deleteBookMark(id: Int!): BookMark
  addBmCategory(name: String!, userId:String): BmCategory
  updateBmCategory(id: Int!, name: String!): BmCategory
  deleteBmCategory(id: Int!): BmCategory

}
`;

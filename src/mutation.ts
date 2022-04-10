
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
  addTodo(title: String!, content: String!, complete: Int, userId:String  ): Todo
  updateTodo(id: Int!, title: String!, content: String!, complete: Int): Todo
  updateCompleteTodo(id: Int!, complete: Int): Todo
  deleteTodo(id: Int!): Todo
  addMeasure(mvalue: Int!, userId:String  ): Measure
  updateMeasure(id: Int!, mvalue: Int!): Measure
  deleteMeasure(id: Int!): Measure
  addMemo(title: String!, content: String!, userId:String  ): Memo
  updateMemo(id: Int!, title: String!, content: String!): Memo
  deleteMemo(id: Int!): Memo
  
}
`;


export const GQL_QUERY = `
  type Query {
    hello: String
    getToken : String
    tasks: [Task]
    task(id: Int): Task    
    bookMarks(userId: String): [BookMark]
    searchBookMarks(userId: String, seachKey:String): [BookMark]
    categoryBookMarks(userId: String, bmCategoryId: Int): [BookMark]
    bookMark(id: Int): BookMark
    bmCategories(userId: String): [BmCategory]
    bmCategory(id: Int): BmCategory
    todos(userId: String): [Todo]
    todo(id: Int): Todo
    measures(userId: String): [Measure]
    measure(id: Int): Measure
    memos(userId: String): [Memo]
    memo(id: Int): Memo
    searchMemos(userId: String, seachKey:String): [Memo]

  }
`;
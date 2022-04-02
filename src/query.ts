
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
  }
`;
const {gql} = require('apollo-server-express');
import {GQL_QUERY} from './query'
import {GQL_MUTATION} from './mutation'

const scheme = {
  getTypeDefs : function(){
    return gql`
    type User {
      id: String
      mail: String
      name: String
      password: String
    }
    type Task {
      id: Int
      title: String
      content: String
      created_at: String
    }
    type BookMark {
      id: Int
      title: String
      url:   String
      tag:   String!
      bmCategoryId: Int!
      userId: String!
      createdAt: String
    }
    type BmCategory {
      id: Int
      name: String 
      userId: String!
      createdAt: String
    }
    type Todo {
      id: Int
      title: String
      content:   String
      complete: Int!
      userId: String!
      createdAt: String
    }
    type Measure {
      id: Int
      mdate: String
      mvalue: Int!
      userId: String!
      createdAt: String
    }
    type Memo {
      id: Int
      title: String
      content:   String
      userId: String!
      createdAt: String
    }      
    ${GQL_QUERY}
    ${GQL_MUTATION}
  `;
  }
}
export default scheme;

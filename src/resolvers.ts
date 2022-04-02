
import LibTask from './lib/LibTask';
import LibCsrf from './lib/LibCsrf';
import LibBookMark from './lib/LibBookMark';
import LibBmCategory from './lib/LibBmCategory';

/* resolvers */
const resolvers = {
  Query: {
    hello: () => 'Hello world-22',
    /* tasks */
    tasks: async () => {
      return await LibTask.getItems();
    },     
    async task(parent, args, context, info){
      return await LibTask.getTask(args.id);
    },
    /* bookMarks */
    bookMarks: async (parent, args, context, info) => {
      return await LibBookMark.getItems(args);
    },     
    async bookMark(parent, args, context, info){
      return await LibBookMark.getItem(args.id);
    },
    searchBookMarks: async (parent, args, context, info) => {
      return await LibBookMark.searchBookMarks(args);
    },  
    categoryBookMarks: async (parent, args, context, info) => {
      return await LibBookMark.categoryBookMarks(args);
    },  
    /* BmCategory */
    bmCategories: async (parent, args, context, info) => {
      return await LibBmCategory.getItems(args);
    },
    async bmCategory(parent, args, context, info){
      return await LibBmCategory.getItem(args.id);
    }, 
  
  },
  Mutation: {
    /* tasks */
    addTask: async (parent, args, context) => {
      const ret = await LibTask.addTask(args)
      return ret
    },
    updateTask: async (parent, args, context) => {
      const ret = await LibTask.updateTask(args)
      return ret
    }, 
    deleteTask: async (parent, args, context) => {
      const ret = await LibTask.deleteTask(args)
      return ret
    },
    /* csrf */
    async addToken(parent, args, context, info){
      return await LibCsrf.addToken(args);
    },
    /* BookMark */
    async addBookMark(parent, args, context, info){
      console.log(args);
      return await LibBookMark.addBookMark(args);
    },
    updateBookMark: async (parent, args, context) => {
      const ret = await LibBookMark.updateBookMark(args)
      return ret
    }, 
    deleteBookMark: async (parent, args, context) => {
      const ret = await LibBookMark.deleteBookMark(args)
      return ret
    },
    /* BmCategory */
    async addBmCategory(parent, args, context, info){
      console.log(args);
      return await LibBmCategory.addBmCategory(args);
    },    
    updateBmCategory: async (parent, args, context) => {
      const ret = await LibBmCategory.updateBmCategory(args)
      return ret
    },
    deleteBmCategory: async (parent, args, context) => {
      const ret = await LibBmCategory.deleteBmCategory(args)
      return ret
    },

  }
};
export default resolvers;

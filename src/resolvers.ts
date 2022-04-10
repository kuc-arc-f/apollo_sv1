
import LibTask from './lib/LibTask';
import LibCsrf from './lib/LibCsrf';
import LibBookMark from './lib/LibBookMark';
import LibBmCategory from './lib/LibBmCategory';
import LibTodo from './lib/LibTodo';
import LibMeasure from './lib/LibMeasure';
import LibMemo from './lib/LibMemo';

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
    /* todo */ 
    async todos(parent, args, context, info){
      return await LibTodo.getItems(args);
    }, 
    async todo(parent, args, context, info){
      return await LibTodo.getItem(args.id);
    },
    /* measures */
    async measures(parent, args, context, info){
      return await LibMeasure.getItems(args);
    }, 
    async measure(parent, args, context, info){
      return await LibMeasure.getItem(args.id);
    },
    /* memo */
    async memos(parent, args, context, info){
      return await LibMemo.getItems(args);
    }, 
    async memo(parent, args, context, info){
      return await LibMemo.getItem(args.id);
    },
    async searchMemos(parent, args, context, info){
      return await LibMemo.searchMemos(args);
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
    /* todo */
    async addTodo(parent, args, context, info){
      return await LibTodo.addTodo(args);
    }, 
    updateTodo: async (parent, args, context) => {
      const ret = await LibTodo.updateTodo(args)
      return ret
    },
    updateCompleteTodo: async (parent, args, context) => {
      const ret = await LibTodo.updateCompleteTodo(args)
      return ret
    },
    deleteTodo: async (parent, args, context) => {
      const ret = await LibTodo.deleteTodo(args)
      return ret
    },
    /* measures */
    async addMeasure(parent, args, context, info){
      return await LibMeasure.addMeasure(args);
    }, 
    updateMeasure: async (parent, args, context) => {
      const ret = await LibMeasure.updateMeasure(args)
      return ret
    },
    deleteMeasure: async (parent, args, context) => {
      const ret = await LibMeasure.deleteMeasure(args)
      return ret
    },
    /* memo */
    async addMemo(parent, args, context, info){
      return await LibMemo.addMemo(args);
    }, 
    updateMemo: async (parent, args, context) => {
      const ret = await LibMemo.updateMemo(args)
      return ret
    },
    deleteMemo: async (parent, args, context) => {
      const ret = await LibMemo.deleteMemo(args)
      return ret
    },

  }
};
export default resolvers;

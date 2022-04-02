const { PrismaClient } = require('@prisma/client')
//import LibCsrf from "./LibCsrf"
//import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args.userId);
      const prisma = new PrismaClient()
      const items = await prisma.bookMark.findMany({
        where: { userId: args.userId },
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
//console.log(items);
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },    
  getItem :async function(id: number){
    try {
      const prisma = new PrismaClient();
      let item = await prisma.bookMark.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
//      const dt = new Date(item.createdAt);
console.log(String(item.createdAt) );
//      item.createdAt = dt.toString();
//      item.createdAt = dt;
/*
      const json = JSON.stringify(item);
      const obj = JSON.parse(json);
      console.log(JSON.stringify(item));
      console.log(obj);
*/
//      console.log(typeof item.createdAt );
      return item;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  addBookMark :async function(args: any){
    try {
console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.bookMark.create({
        data: {
          title: args.title,
          url: args.url,
          bmCategoryId: args.bmCategoryId,
          userId: args.userId,
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , addBookMark: '+ err);
    }          
  },
  updateBookMark :async function(args: any){
    try {
//console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.bookMark.update({
        where: { id: args.id},
        data: {
          title: args.title, 
          url: args.url, 
          bmCategoryId: args.bmCategoryId, 
        },
      })               
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateBookMark,'+ err);
    }          
  },  
  deleteBookMark :async function(args: any){
    try {
      const prisma = new PrismaClient();
      const result = await prisma.bookMark.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteBookMark,' + err);
    }          
  },
  searchBookMarks :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient()
      const items = await prisma.bookMark.findMany({
        where: {
          userId: args.userId,
          title: {
            contains: args.seachKey,
          },           
        },
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
//console.log(items);
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , searchBookMarks');
    }          
  },
  categoryBookMarks :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient()
      const items = await prisma.bookMark.findMany({
        where: {
//          userId: args.userId,
          bmCategoryId: args.bmCategoryId, 
        },
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
//console.log(items);
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , categoryBookMarks');
    }          
  },

}

const { PrismaClient } = require('@prisma/client')
//import LibCsrf from "./LibCsrf"
//import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args.userId);
      const prisma = new PrismaClient()
      const items = await prisma.memo.findMany({
        where: { userId: args.userId },
        orderBy: { id: 'desc',},
      })
      await prisma.$disconnect()
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },
  searchMemos :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient()
      const items = await prisma.memo.findMany({
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
      throw new Error('Error , searchMemos');
    }          
  },      
  getItem :async function(id: number){
    try {
console.log(id);
      const prisma = new PrismaClient();
      let item = await prisma.memo.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
      return item;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  addMemo :async function(args: any){
    try {
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.memo.create({
        data: {
          title: args.title,
          content: args.content,
          userId: args.userId,
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addMemo: '+ err);
    }          
  },
  updateMemo :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.memo.update({
        where: { id: args.id},
        data: {
          title: args.title,
          content: args.content,
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateMemo,'+ err);
    }          
  },
  deleteMemo :async function(args: any){
    try {
      // 
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.memo.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteMemo,' + err);
    }          
  },             
}

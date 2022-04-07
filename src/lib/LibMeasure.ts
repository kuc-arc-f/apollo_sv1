const { PrismaClient } = require('@prisma/client')
import LibCsrf from "./LibCsrf"
import logger from './logger'

export default {
  getItems :async function(args: any){
    try {
console.log(args.userId);
      const prisma = new PrismaClient()
      const items = await prisma.measure.findMany({
        where: { userId: args.userId },
        orderBy: { id: 'asc',},
      })
      await prisma.$disconnect()
      return items      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItems');
    }          
  },    
  getItem :async function(id: number){
    try {
      const prisma = new PrismaClient();
      let item = await prisma.measure.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
//console.log(item);
      return item;
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  addMeasure :async function(args: any){
    try {
console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.measure.create({
        data: {
//          mdate: args.mdate,
          mdate: new Date(),
          mvalue: args.mvalue,
          userId: args.userId,
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , addMeasure: '+ err);
    }          
  },
  updateMeasure :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.measure.update({
        where: { id: args.id},
        data: {
          mvalue: args.mvalue,
        },
      })               
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateMeasure,'+ err);
    }          
  },
  deleteMeasure :async function(args: any){
    try {
console.log(args);
      const prisma = new PrismaClient();
      const result = await prisma.measure.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteMeasure,' + err);
    }          
  },             
}

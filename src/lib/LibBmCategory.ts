const { PrismaClient } = require('@prisma/client')

export default {
  getItems :async function(args: any){
    try {
console.log(args.userId);
      const prisma = new PrismaClient()
      const items = await prisma.bmCategory.findMany({
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
      let item = await prisma.bmCategory.findUnique({
        where: { id: id },
      });        
      await prisma.$disconnect()
// console.log(String(item.createdAt) );
      return item;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , getItem');
    }          
  },
  addBmCategory :async function(args: any){
    try {
      console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.bmCategory.create({
        data: {
          name: args.name,
          userId: args.userId,
        }
      }) 
      await prisma.$disconnect()
      console.log(result);
      return result;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , addBmCategory: '+ err);
    }          
  },
  updateBmCategory :async function(args: any){
    try {
console.log( args); 
      const prisma = new PrismaClient();
      const result = await prisma.bmCategory.update({
        where: { id: args.id},
        data: {
          name: args.name, 
        },
      })               
      await prisma.$disconnect()
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      throw new Error('Error , updateBmCategory,'+ err);
    }          
  },  
  deleteBmCategory :async function(args: any){
    try {
      const prisma = new PrismaClient();
      const result = await prisma.bmCategory.delete({
        where: { id: Number(args.id) },
      })                   
      await prisma.$disconnect()
console.log(result);
      return result;      
    } catch (err) {
      console.error(err);
      throw new Error('Error , deleteBmCategory,' + err);
    }          
  },             
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // مسح أي بيانات سابقة
  await prisma.user.deleteMany()
  await prisma.product.deleteMany()
  await prisma.farm.deleteMany()
  
  // إضافة admin افتراضي
  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      role: 'SUPER_ADMIN',
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })

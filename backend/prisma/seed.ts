import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const management = await prisma.role.create({
    data: { name: "Management" },
  });

  const tech = await prisma.role.create({
    data: { name: "Technology" },
  });

  const investments = await prisma.role.create({
    data: { name: "Investments" },
  });

  await prisma.employee.createMany({
    data: [
      {
        name: "Grace Allen",
        email: "grace@test.com",
        roleId: management.id,
      },
      {
        name: "Emily Chen",
        email: "emily@test.com",
        roleId: tech.id,
      },
      {
        name: "Sarah Thompson",
        email: "sarah@test.com",
        roleId: investments.id,
      },
    ],
  });

  console.log("Seed data inserted!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
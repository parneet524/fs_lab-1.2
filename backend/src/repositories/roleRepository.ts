import prisma from "../prisma";

export const getAllRoles = async () => {
  return await prisma.role.findMany();
};
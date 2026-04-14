import prisma from "../prisma";

export const getAllEmployees = async () => {
  return await prisma.employee.findMany({
    include: { role: true },
  });
};

export const getEmployeeById = async (id: number) => {
  return await prisma.employee.findUnique({
    where: { id },
    include: { role: true },
  });
};

export const createEmployee = async (
  name: string,
  email: string,
  roleId: number
) => {
  return await prisma.employee.create({
    data: {
      name,
      email,
      role: {
        connect: { id: roleId }
      }
    }
  });
};
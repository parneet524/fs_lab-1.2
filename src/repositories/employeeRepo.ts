export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
};

export type Department = {
  id: number;
  name: string;
};

export const employeeRepo = {

  async getDepartments(): Promise<Department[]> {
    const response = await fetch("http://localhost:3000/api/departments");
    return response.json();
  },

  async getEmployees(): Promise<Employee[]> {
    const response = await fetch("http://localhost:3000/api/employees");
    return response.json();
  },

  async createEmployee(
    firstName: string,
    lastName: string,
    department: string
  ): Promise<Employee> {

    const response = await fetch("http://localhost:3000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        department
      })
    });

    return response.json();
  }

};
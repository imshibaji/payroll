import { Employee } from "../entities/employee.entity";
import { AppDataSource } from "../data-source";

export const EmployeeRepository = AppDataSource.getRepository(Employee).extend({

});
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entities/department.entity"
import { Employee } from "./entities/employee.entity"
import { Salary } from "./entities/salary.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "sql12.freemysqlhosting.net",
    port: 3306,
    username: "sql12616806",
    password: "7fqZKb5kEY",
    database: "sql12616806",
    synchronize: false,
    logging: false, 
    entities: [Department, Employee, Salary],
    migrations: [],
    subscribers: [],
});

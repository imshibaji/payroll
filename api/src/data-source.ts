import "reflect-metadata"
import { DataSource } from "typeorm"
import { Department } from "./entities/department.entity"
import { Employee } from "./entities/employee.entity"
import { Salary } from "./entities/salary.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "sql12.freemysqlhosting.net",
    port: 3306,
    username: "sql12614276",
    password: "9jLeIQL4S7",
    database: "sql12614276",
    synchronize: false,
    logging: false, 
    entities: [Department, Employee, Salary],
    migrations: [],
    subscribers: [],
})

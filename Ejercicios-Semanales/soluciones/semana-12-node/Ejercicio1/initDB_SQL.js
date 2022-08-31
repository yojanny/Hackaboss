require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs/promises");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DB,
      timezone: "Z",
      multipleStatements: true, //permite multiples sentencias sql en la misma connection.query
    });

    const sql = await fs.readFile("./workbench_export.sql", "utf-8");

    await connection.query(sql);

    console.log("Todo hecho 😵‍💫");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

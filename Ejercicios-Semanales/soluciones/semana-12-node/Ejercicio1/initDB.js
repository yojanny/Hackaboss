require("dotenv").config();
const mysql = require("mysql2/promise");
const Chance = require("chance");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

const chance = new Chance();

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DB,
      timezone: "Z",
    });

    console.log("Borrando tablas 😈");
    //borramos tablas si existen previamente
    await connection.query(`DROP TABLE IF EXISTS likes`);
    await connection.query(`DROP TABLE IF EXISTS photos`);
    await connection.query(`DROP TABLE IF EXISTS users`);

    await connection.query(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(100) UNIQUE NOT NULL,
        name VARCHAR(100) NOT NULL,
        active BOOLEAN DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await connection.query(`
    CREATE TABLE photos (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      user_id INTEGER,
      photo_file_name VARCHAR(100) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

    await connection.query(`
    CREATE TABLE likes (
      id INTEGER PRIMARY KEY AUTO_INCREMENT,
      user_id INTEGER,
      photo_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (photo_id) REFERENCES photos(id)
    );
  `);

    console.log("Nuevas tablas creadas! 👌");

    //metemos datos de prueba
    const FAKE_USERS = 10;

    for (let index = 0; index < FAKE_USERS; index++) {
      await connection.query(
        `
      INSERT INTO users(email, name, active, created_at) VALUES(?, ?, ?, ?)
      `,
        [
          chance.email(),
          chance.name(),
          chance.bool(),
          chance.date({ year: 2022 }),
        ]
      );
    }

    const FAKE_PHOTOS = 20;

    for (let index = 0; index < FAKE_PHOTOS; index++) {
      await connection.query(
        `
        INSERT INTO photos (user_id, photo_file_name, created_at) VALUES(?,?,?)
      `,
        [
          chance.integer({ min: 1, max: FAKE_USERS }),
          `${chance.string({ length: 20, alpha: true, numeric: true })}.jpg`,
          chance.date({ year: 2022 }),
        ]
      );
    }

    const FAKE_LIKES = 100;

    for (let index = 0; index < FAKE_LIKES; index++) {
      await connection.query(
        `
        INSERT INTO likes(user_id, photo_id, created_at) VALUES(?,?,?)
      `,
        [
          chance.integer({ min: 1, max: FAKE_USERS }),
          chance.integer({ min: 1, max: FAKE_PHOTOS }),
          chance.date({ year: 2022 }),
        ]
      );
    }

    console.log("Datos de prueba insertados! 🤠");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();

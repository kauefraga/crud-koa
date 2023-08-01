import { pg } from './postgres';

// Create all the tables
async function up() {
  // Write person table
  await pg`
    CREATE TABLE IF NOT EXISTS person (
      id TEXT NOT NULL PRIMARY KEY,
      nickname VARCHAR(32) NOT NULL,
      name VARCHAR(100) NOT NULL,
      birthdate DATE NOT NULL,
      stack VARCHAR[]
    )
  `;
}

async function down() {
  await pg`
    DROP TABLE IF EXISTS person;
  `;
}

try {
  up();
} catch (e) {
  console.error(e);
}

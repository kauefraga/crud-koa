import { randomUUID } from 'crypto';
import { pg } from '../postgres';

async function insertPeople() {
  await pg`
    INSERT INTO person (
      id, nickname, name, birthdate, stack
    ) VALUES (
      ${randomUUID()},
      'kauefraga',
      'Kauê Fraga Rodrigues',
      '2000-01-12',
      ARRAY['Javascript', 'C++', 'Python', 'Golang']
    )
  `;
  // ........
}

try {
  insertPeople();
} catch (e) {
  console.error(e);
}

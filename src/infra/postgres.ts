import 'dotenv/config';
import postgres from 'postgres';

const DATABASE_URL = process.env.NODE_ENV === 'development'
  ? process.env.DATABASE_URL
  : 'production url';

if (!DATABASE_URL) {
  throw new Error('Something went wrong. Probably, the database URL is not specified.');
}

export const pg = postgres(DATABASE_URL);

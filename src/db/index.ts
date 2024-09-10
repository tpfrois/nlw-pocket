import { env } from '@/config/env';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

export const client = postgres(env.DATABASE_URL);
export const closeConnection = client.end;
export const db = drizzle(client, {
  schema,
  logger: true,
});

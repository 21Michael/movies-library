import 'dotenv/config';

const POSTGRES_DB_HOST: string = process.env.POSTGRES_DB_HOST || '';
const POSTGRES_USER: string = process.env.POSTGRES_USER || '';
const POSTGRES_PASSWORD: string = process.env.POSTGRES_PASSWORD || '';
const POSTGRES_DB: string = process.env.POSTGRES_DB || '';

export { POSTGRES_DB_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB };

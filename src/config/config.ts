import { ServerConfig } from '../types/server';

// Load environment variables
import './dotenv';
export const serverConfig: ServerConfig = {
  port: Number(process.env.PORT) || 3000,
  env: process.env.NODE_ENV || 'development',
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
  },
};

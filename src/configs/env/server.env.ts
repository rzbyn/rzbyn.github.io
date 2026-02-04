import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NOTION_API_KEY: z.string().min(1).describe('NOTION_API_KEY is required'),
    NOTION_DATASOURCE_ID: z
      .string()
      .min(1)
      .describe('NOTION_DATASOURCE_ID is required'),
  },
  experimental__runtimeEnv: process.env,
});

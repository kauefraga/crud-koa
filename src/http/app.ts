import 'dotenv/config';
import Koa from 'koa';
import { router } from './routes';
import { logger } from './middlewares/logger';
import { responseTime } from './middlewares/response-time';

export function createKoaApp() {
  const koa = new Koa();

  koa.use(logger);
  koa.use(responseTime);

  koa.use(router.routes());
  koa.use(router.allowedMethods());

  return koa
}

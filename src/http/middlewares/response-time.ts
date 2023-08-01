import { Context, Next } from 'koa';

export async function responseTime(context: Context, next: Next) {
  const start = Date.now();

  await next();

  const ms = Date.now() - start;

  context.set('X-Response-Time', `${ms}ms`);
}

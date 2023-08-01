import { Context, Next } from 'koa';

export async function logger(context: Context, next: Next) {
  await next();

  const responseTime = context.response.get('X-Response-Time');

  console.log(`${context.method} ${context.url} - ${responseTime}`);
}

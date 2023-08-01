import Router from '@koa/router';

export const router = new Router();

router.get('/v1', (context, next) => {

  context.body = { hello: 'world' };
});

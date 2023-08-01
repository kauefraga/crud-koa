import { createKoaApp } from './app';

function bootServer(port: number) {
  console.log('> Starting server...');

  const server = createKoaApp();

  server.listen(port, () => {
    console.log(`> Done! The server is listening on port ${port}`);
  });
}

const PORT = Number(process.env.PORT) ?? 3333;

bootServer(PORT);

import * as http from 'http';
import * as os from 'os';

const PORT = parseInt(process.env.PORT ?? '8080', 10);
const START_TIME = Date.now();

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405);
    res.end('Method Not Allowed');
    return;
  }

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
    return;
  }

  if (req.url === '/') {
    const body = JSON.stringify({
      status: 'ok',
      hostname: os.hostname(),
      uptime: Math.floor((Date.now() - START_TIME) / 1000)
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(body);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`canary listening on port ${PORT}`);
});

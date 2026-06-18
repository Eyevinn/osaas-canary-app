# osaas-canary-app

Minimal canary app for OSC MyApp deployments. Used for end-to-end ingress health monitoring via Uptime Kuma.

## Endpoints

- `GET /` - Returns `{ "status": "ok", "hostname": "<pod hostname>", "uptime": <seconds> }`
- `GET /health` - Returns `ok`

## Deploy on OSC

1. Deploy as a MyApp on Open Source Cloud, pointing to this repository image.
2. Add the resulting URL (e.g. `https://<appid>.myapp.svc.prod.osaas.io/health`) to Uptime Kuma as an HTTP monitor.

## Local run

```bash
npm ci
npm run build
npm start
```

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `8080` | Port to listen on |

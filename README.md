## Overview

A minimal HTTP JSON API implemented with Node.js v25 using the built-in http modules.

## Endpoints

* GET / → 200 { "message": "ok" }
* GET /healthz → 200 { "status": "ok" }
* GET /test-credential-leak → 200 { "secret": "BIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGfuQe" }
* Any other path → 404 { "message": "not found" }

## Configuration

* port (optional): Port to listen on. Defaults to 8080 if not set.

## Run

```
port=8080 node ./index.js
```

## Test

```
curl -s http://localhost:8080/ | jq
curl -s http://localhost:8080/health | jq
curl -s http://localhost:8080/test-credential-leak | jq
curl -s -i http://localhost:8080/does-not-exist
```
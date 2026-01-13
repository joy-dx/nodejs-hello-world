import http from "node:http";

function sendJson(res, statusCode, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body),
  });
  res.end(body);
}

const port = Number(process.env.port || 3000);

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/") {
    return sendJson(res, 200, { message: "Hello from JoyDX" });
  }

  if (method === "GET" && url === "/health") {
    return sendJson(res, 200, { status: "ok" });
  }

  if (method === "GET" && url === "/test-credential-leak") {
    return sendJson(res, 200, {
      secret: "BIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGfuQe",
    });
  }

  return sendJson(res, 404, { message: "not found" });
});

server.listen(port, () => {
  console.log(`listening on :${port}`);
});
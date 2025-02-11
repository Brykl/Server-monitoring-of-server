import { Request, Response, Next } from "restify";
const restify = require('restify')

const server = restify.createServer();

server.get("/", (req: Request, res: Response, next: Next) => {
  res.send({ message: "Hello, Restify with TypeScript!" });
  next();
});

server.listen(8090, () => {
  console.log("Server is running on http://localhost:8090");
});

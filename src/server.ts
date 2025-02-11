import { Request, Response, Next } from "restify";
const getServerInfo = require('./services/informationOfServer/serverInfo')

const restify = require('restify')

const server = restify.createServer();

server.get("/", (req: Request, res: Response, next: Next) => {

  res.send({ message: "Hello, Restify with TypeScript!", test: 'test' });
  console.log('test')
  console.log(getServerInfo())
  console.log(getServerInfo())
  next();
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

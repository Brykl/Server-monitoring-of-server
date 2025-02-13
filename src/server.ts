import { Request, Response, Next } from "restify";
const corsMiddleware = require('restify-cors-middleware2')

const cors = corsMiddleware({
  origins: ["*"], //
  allowHeaders: ["X-Requested-With"],
});

const getServerInfo = require('./services/informationOfServer/serverInfo')

const restify = require('restify')

const server = restify.createServer();

server.use(
  function crosOrigin(req: Request, res: Response, next: Next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
)

server.get("/", (req: Request, res: Response, next: Next) => {

  res.send({ message: "Hello, Restify with TypeScript!", test: 'test' });
  next();
});

server.get("/server/info", (req: Request, res: Response, next: Next) => {
  res.send({data: getServerInfo()})
  // res.send({message: 'Hello'})
})


server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});

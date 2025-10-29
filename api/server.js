import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../data/database.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Prefix tất cả routes bằng /api
server.use("/api", router);

export default async function handler(req, res) {
  try {
    await new Promise((resolve) => server(req, res, resolve));
  } catch (error) {
    console.error("JSON Server crashed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

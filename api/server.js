import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const server = jsonServer.create();

// ✅ đảm bảo đường dẫn tới data/db.json đúng
const router = jsonServer.router(path.join(__dirname, "../data/database.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// mount route /api
server.use("/api", router);

// ✅ Vercel cần handler async
export default async function handler(req, res) {
  try {
    await new Promise((resolve) => {
      server(req, res, resolve);
    });
  } catch (error) {
    console.error("JSON Server crashed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

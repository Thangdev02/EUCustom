import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const server = jsonServer.create();

// ✅ Đường dẫn tới file JSON
const router = jsonServer.router(path.join(__dirname, "../data/database.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ✅ Mount route
server.use("/api", router);

// ✅ Vercel handler
export default async function handler(req, res) {
  try {
    await new Promise((resolve) => server(req, res, resolve));
  } catch (error) {
    console.error("JSON Server crashed:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// ✅ Nếu đang chạy local (not in production), bật port 3000
if (process.env.NODE_ENV !== "production") {
  const PORT = 3000;
  server.listen(PORT, () => {
    console.log(`✅ JSON Server running at http://localhost:${PORT}/api/news`);
  });
}

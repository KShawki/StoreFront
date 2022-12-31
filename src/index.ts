import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config";
import routes from "./routes";
import path from "path";
// import db from "./database";
// import RateLimit from "express-rate-limit";

const app = express();
const PORT = config.port || 3001;

// Middleware request logger, secuirty
app.use(morgan("common"), helmet(), express.json());
app.use(express.static(path.resolve(__dirname, "public")));

// Create an instant from server
app.listen(PORT, (): void =>
  console.log(`Running on http://localhost:${PORT}`)
);

app.get("/", (req, res): void => {
  res.status(200).sendFile(path.join(__dirname, "./public/index.html"));
});

app.use("/api", routes);

// TEST Database Connection - Works ✅
/*
  db.connect().then((client) => {
    return client
      .query("select now()")
      .then((res) => {
        client.release();
        console.log(res.rows);
      })
      .catch((error) => {
        client.release();
        console.log(error.stack);
      });
  });
*/
export default app;

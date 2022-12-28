import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import config from "./config";
import db from "./database";
// import RateLimit from "express-rate-limit";

const app = express();
const PORT = config.port || 3000;

// Middleware request logger, secuirty, rate limitting
app.use(morgan("common"), helmet(), express.json());

// Create an instant from server
app.listen(PORT, (): void =>
  console.log(`Running on http://localhost:${PORT}`)
);

app.get("/", (req, res): void => {
  res.json({
    message: `Hello, Khaled`,
  });
});

app.post("/", (req, res): void => {
  res.json({
    message: `Hello, Khaled`,
    data: req.body,
  });
});

// db.connect().then((client) => {
//   return client
//     .query("select now()")
//     .then((res) => {
//       client.release();
//       console.log(res.rows);
//     })
//     .catch((error) => {
//       client.release();
//       console.log(error.stack);
//     });
// });

export default app;

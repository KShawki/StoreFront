import express from "express";

const app = express();
const PORT = 3000;

app.listen(PORT, (): void =>
  console.log(`Running on http://localhost:${PORT}`)
);

app.get("/", (req, res): void => {
  res.json({
    message: `Hello, Khaled`,
  });
});

export default app;

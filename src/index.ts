// index.ts
import express from "express";

const app = express();
const PORT = 3000;

// Simple GET endpoint
app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});
app.get("/test", (req, res) => {
  res.send("test file setup!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;

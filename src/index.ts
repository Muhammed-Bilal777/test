// index.ts
import express from "express";

const app = express();
const PORT = 3000;

// Simple GET endpoint
app.get("/", (req, res) => {
  res.send("Hello from Express + TypeScript!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

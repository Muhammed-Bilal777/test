// index.ts
import express from "express";

const app = express();
const PORT = 3000;

// Simple GET endpoint
app.get("/", (req, res) => {
  console.log("express server started ");
  res.send("Hello from Express + TypeScript! deployed on render.com");
});
app.get("/test", (req, res) => {
  res.send("test file setup!");
});

// Start server
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
export default app;

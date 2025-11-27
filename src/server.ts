import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🟦 REST:     http://localhost:${PORT}/api`);
  console.log(`🟪 GraphQL:  http://localhost:${PORT}/query`);
});

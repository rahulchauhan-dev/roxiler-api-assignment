import express from "express";
import todosRoutes from "./routes/todosRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/todos", todosRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running..");
});

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

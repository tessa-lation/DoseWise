const express = require("express");
const cors = require("cors");

const interactionsRouter = require("./routes/interactions");

const app = express();

app.use(cors());
app.use(express.json());

// connect your route
app.use("/api", interactionsRouter);

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Compare API is running");
});

app.listen(PORT,  "0.0.0.0", () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

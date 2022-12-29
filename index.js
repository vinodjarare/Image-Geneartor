const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(index.html);
});

app.use("/api", require("./routes/openaiRoutes"));

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

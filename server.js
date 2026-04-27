const express = require("express");
require("dotenv").config();

const uploadRoutes = require("./routes/upload");

const app = express();

app.use("/api", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Multer + Cloudinary API Running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));

# Multer-Cloudinary


Step 1: Create Repo on GitHub
Go to 👉 GitHub

Click New Repository

Name: multer-cloudinary-upload

Visibility: Public

Click Create


🚀 Step 2: Local Project Setup

mkdir multer-cloudinary-upload
cd multer-cloudinary-upload
npm init -y
npm install express multer cloudinary dotenv streamifier
🚀 Step 3: Project Structure
multer-cloudinary-upload/
│
├── config/
│   └── cloudinary.js
│
├── routes/
│   └── upload.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
🚀 Step 4: Add Code Files


📄 server.js
```const express = require("express");
require("dotenv").config();

const uploadRoutes = require("./routes/upload");

const app = express();

app.use("/api", uploadRoutes);

app.get("/", (req, res) => {
  res.send("Multer + Cloudinary API Running 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));
📄 config/cloudinary.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
📄 routes/upload.js
const express = require("express");
const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload route
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const streamUpload = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "uploads" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload();

    res.json({
      message: "Upload successful",
      url: result.secure_url,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});```
module.exports = router;


📄 .env
});```
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
});```
PORT=3000


📄 .gitignore
node_modules/


.env
📄 README.md
# Multer + Cloudinary File Upload 🚀

This project demonstrates how to upload images using:
- Multer (for handling form-data)
- Cloudinary (for cloud storage)

## 🔧 Installation

```bash
npm install
▶️ Run
node server.js
📡 API Endpoint
POST /api/upload
Form Data:
key: image (file)
📌 Tech Stack
Node.js
Express.js
Multer
Cloudinary
📷 Response
{
  "message": "Upload successful",
  "url": "https://cloudinary-url"
}

---

# 🚀 Step 5: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Multer + Cloudinary upload"

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/multer-cloudinary-upload.git
});```

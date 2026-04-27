# Multer + Cloudinary File Upload 🚀

This project demonstrates how to upload images using:
- Multer (for handling multipart/form-data)
- Cloudinary (for cloud storage)

## 📂 Project Structure

multer-cloudinary-upload/
│
├── config/
│   └── cloudinary.js
├── routes/
│   └── upload.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md

## 🔧 Installation

```bash
npm install
```

## ▶️ Run the Server

```bash
node server.js
```

## 📡 API Endpoint

POST `/api/upload`

### Form Data:
- key: image (file)

## 📷 Sample Response

```json
{
  "message": "Upload successful",
  "url": "https://res.cloudinary.com/your-cloud/image/upload/..."
}
```

## ⚙️ Environment Variables (.env)

```
CLOUD_NAME=your_cloud_name
API_KEY=your_api_key
API_SECRET=your_api_secret
PORT=3000
```

## 🚀 Tech Stack

- Node.js
- Express.js
- Multer
- Cloudinary

## 📌 Notes

- Uses Multer memory storage for fast uploads
- Streams file directly to Cloudinary
- No local file storage required

---

## ✨ Future Enhancements

- Multiple file uploads
- MongoDB integration
- JWT Authentication
- React frontend UI

---

## 👨‍💻 Author

Your Name

const multer = require("multer");
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'your_folder_name',
    // format: async (req, file) => 'png', // or jpg, jpeg, etc.
    public_id: (req, file) => `${Date.now()}-${file.originalname}`
  },
});

const upload = multer({ storage: storage });
const imageUploadMiddleware = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      console.error("Multer error:", err);
      res.status(500).json({ error: "File upload failed"});
    } else {
      next();
    }
  });
};

module.exports = { imageUploadMiddleware };

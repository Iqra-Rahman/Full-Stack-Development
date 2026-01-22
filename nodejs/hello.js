const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, './test');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
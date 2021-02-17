const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        let folder = path.join(__dirname, "../public/images");
        callback(null, folder);
    },
    filename: (req, file, callback) => {
        let imgName = Date.now() + path.extname(file.originalname);
        callback(null, imgName)
    }
});

const fileUpload = multer({ storage });

module.exports = fileUpload;
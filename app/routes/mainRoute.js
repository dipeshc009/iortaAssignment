const express = require('express');
const multer = require('multer');

const router = express.Router();

const DemoController = require('../controllers/demoController');

// MULTER CONFIG TO FETCH THE FILES
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files');
    },
    filename: (req, file, cb) => {
        console.log('FILE =>', file);
        let fileName = file.originalname;
        cb(null, fileName);
        req._fileName = fileName;
    },
});

let fileUpload = multer({
    storage: storage,
});

router.post('/saveFiles', fileUpload.array('file', 10), DemoController.saveFiles);
router.post('/generateReport', DemoController.generateReport);

module.exports = router;
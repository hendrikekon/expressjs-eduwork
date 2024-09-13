const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads'});
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    res.send({
        status: 'Succesfully',
        Message: 'Welcome to Express JS'
    })
})

router.get('/data', (req, res) => {
    res.send({
        status: 'Successfully',
        message: 'Data'
        
    });
});

router.get('/:category/:tag', (req, res) => {
    const {category, tag} = req.params;
    res.json({category, tag});
});

router.get('/aboutme', (req, res) => {
    res.send('<h3>Hello My name is Hendrik, I am Learning express js</h3>');
});

// router.post('/product', (req, res) => {
//     res.json(req.body);
//   });

router.post('/product', upload.single('image'), (req, res) => {
    const {id, name, price, stock, status} = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, 'uploads', image.originalname)
        fs.renameSync(image.path, target);
        res.json({
            id,
            name,
            price,
            stock,
            status,
            image
        });
    }
});

router.get('/aboutme', (req, res) => {
    res.send('<h3>Hello My name is Hendrik, I am Learning express js</h3>');
});

 module.exports = router;
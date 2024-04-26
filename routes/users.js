import express from 'express';
//router acts as a middleware or App
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Users Page');
// });

// router.get('/profile', (req, res) => {
//     res.send('Users Profile Page');
// });

router.get('/', (req, res) => {
    res.send('Users Page');
}); 

router.get('/new', (req, res) => {
    res.send('User New Form');
});

router.post('/', (req, res) => {
    res.send('User Created');
});

//
router.get('/:id', (req, res) => {
    res.send(`User ${req.params.id}`)
});


export default router;
// Path: views/routes/index.js

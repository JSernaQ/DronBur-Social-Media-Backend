const { Router } = require('express');
const router = Router();

const {
    getPosts,
    postPost
} = require('../controllers/post');

router.get('/:idUser',
    getPosts
);

router.post('/',
    postPost
);

module.exports = router;
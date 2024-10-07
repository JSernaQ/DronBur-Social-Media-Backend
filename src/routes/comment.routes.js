const { Router } = require('express');
const router = Router();
const { postComment } = require('../controllers/comments')

router.post('/',
    postComment
)

module.exports = router;
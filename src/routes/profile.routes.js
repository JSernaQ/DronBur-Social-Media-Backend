const { Router } = require('express');
const router = Router();
const {
    getProfile
} = require('../controllers/profile');

router.get("/:username",
    getProfile
);

module.exports = router;
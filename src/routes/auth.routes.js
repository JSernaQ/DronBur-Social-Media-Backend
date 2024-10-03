const { Router } = require("express");
const router = Router();

const {
    loginController,
    registerController
} = require("../controllers/auth");

router.post("/register",
    registerController
);

router.post("/login",
    loginController
);



module.exports = router;
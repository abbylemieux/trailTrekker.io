"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const authControllers_2 = require("../controllers/authControllers");
const validationMiddleware_1 = require("../middlewares/validationMiddleware");
const router = (0, express_1.Router)();
router.post('/register', authControllers_1.registerUser);
router.post('/register', validationMiddleware_1.validateRegistration, authControllers_2.registerUserHandler);
router.post('/login', authControllers_1.loginUser);
exports.default = router;

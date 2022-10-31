import express from "express";
export const router = express.Router();
// import { signUp, logIn } from "../controllers/user.controllers.js";
// router.post("/signup", signUp);
// router.post("/login", logIn);
router.get("/login", (req,res, next) => {
    console.log('I am in login');
    return res.status(200).json("You want log !")
});
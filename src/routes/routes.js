import express from "express";
import {
    greetingController,
    cardsController,
    certificateController,
    heroController
} from "../controller/controller.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

console.log(process.env.CARDS);
console.log(process.env.CERTIFICATE);

router.get("/", greetingController);
router.get(process.env.CARDS, cardsController);
router.get(process.env.CERTIFICATE, certificateController);
router.get(process.env.HERO, heroController);

export default router;
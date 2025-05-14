import express from "express";
import {
    greetingController,
    cardsController,
    certificateController,
    heroController,
    quotesController
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
router.get(process.env.QUOTES, quotesController);

export default router;
import express from "express";
import {
    greetingController,
    cardsController
} from "../controller/cards.js";

const router = express.Router();

router.get("/", greetingController);
router.get("/api/cards", cardsController);

export default router;
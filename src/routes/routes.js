import express from "express";
import cardsController from "../controller/cards.js";

const router = express.Router();

router.get("/api/cards", cardsController);

export default router;
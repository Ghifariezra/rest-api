import express from "express";
import {
    greetingController,
    cardsController,
    certificateController
} from "../controller/controller.js";

const router = express.Router();

router.get("/", greetingController);
router.get("/api/cards", cardsController);
router.get("/api/certificate", certificateController);

export default router;
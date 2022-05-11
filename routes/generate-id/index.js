import express from "express";
import sequenceGeneratorController from "../../controllers/generate-id/index.js";

const router = express.Router();

// CREATE GENERATE
router.post("/generate", sequenceGeneratorController.generate);

export default router;

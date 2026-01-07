import express from "express";
import {
    getAllSpendings,
    getSpendingById,
    createSpending,
    updateSpending,
    deleteSpending,
} from "../controllers/spending.controller.js";

const router = express.Router();

router.get("/", getAllSpendings);
router.get("/:id", getSpendingById);
router.post("/", createSpending);
router.put("/:id", updateSpending);
router.delete("/:id", deleteSpending);

export default router;
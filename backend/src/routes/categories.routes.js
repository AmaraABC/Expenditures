import express from "express";
import { getAllCategories } from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", getAllCategories);

export default router;

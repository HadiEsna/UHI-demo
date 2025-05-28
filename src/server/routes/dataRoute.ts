import express from "express";
import { getQuote } from "../../controllers/quoter";

export const router = express.Router();

router.get("/quote", getQuote);

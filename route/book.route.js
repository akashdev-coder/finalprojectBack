import express from "express";
import { getBooks, addBook, deleteBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook); // This route handles DELETE requests with book ID

export default router;

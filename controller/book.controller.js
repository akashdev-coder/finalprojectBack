import Book from "../model/book.model.js";

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

// Add a new book
export const addBook = async (req, res) => {
    try {
        const { name, category, description, image } = req.body;
        if (!name || !category) {
            return res.status(400).json({ message: "Name and category are required" });
        }
        const newBook = new Book({ name, category, description, image });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};



// Delete a book by ID
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

import pool from "../config/db.mysql.js";

export const getAllCategories = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT id, categories_name FROM categories`);
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des catégories." });
    }
};

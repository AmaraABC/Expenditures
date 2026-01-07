import Spending from "../models/Spending.js";

export const getAllSpendings = async (req, res) => {
    try {
        const spendings = await Spending.findAll();
        res.json(spendings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des dépenses." });
    }
};

export const getSpendingById = async (req, res) => {
    try {
        const { id } = req.params;
        const spending = await Spending.findById(id);

        if (!spending) {
            return res.status(404).json({ message: "Dépense non trouvée." });
        }

        res.json(spending);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la récupération de la dépense." });
    }
};

export const createSpending = async (req, res) => {
    try {
        const { client_id, category_id, amount, spending_description, spending_date } = req.body;

        if (!client_id || !category_id || !amount || !spending_date) {
            return res.status(400).json({ message: "Champs obligatoires manquants." });
        }

        const newSpending = await Spending.create({
            client_id,
            category_id,
            amount,
            spending_description,
            spending_date,
        });

        res.status(201).json(newSpending);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la création de la dépense." });
    }
};

export const updateSpending = async (req, res) => {
    try {
        const { id } = req.params;
        const spending = await Spending.findById(id);

        if (!spending) {
            return res.status(404).json({ message: "Dépense non trouvée." });
        }

        const { client_id, category_id, amount, spending_description, spending_date } = req.body;

        if (client_id !== undefined) spending.client_id = client_id;
        if (category_id !== undefined) spending.category_id = category_id;
        if (amount !== undefined) spending.amount = amount;
        if (spending_description !== undefined) spending.spending_description = spending_description;
        if (spending_date !== undefined) spending.spending_date = spending_date;

        await spending.update();

        res.json(spending);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la mise à jour de la dépense." });
    }
};

export const deleteSpending = async (req, res) => {
    try {
        const { id } = req.params;
        const spending = await Spending.findById(id);

        if (!spending) {
            return res.status(404).json({ message: "Dépense non trouvée." });
        }

        await spending.delete();

        res.json({ message: "Dépense supprimée avec succès." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur lors de la suppression de la dépense." });
    }
};

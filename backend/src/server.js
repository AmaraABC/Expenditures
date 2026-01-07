import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import SpendingsRoutes from "./routes/spendings.routes.js";
import CategoriesRoutes from "./routes/categories.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());

app.use("/", SpendingsRoutes);
app.use("/", CategoriesRoutes);

app.listen(PORT, () =>
    console.log(`Serveur lancé sur le port ${PORT || 3000}`)
);

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'application de gestion des dépenses !");
});

export default app;
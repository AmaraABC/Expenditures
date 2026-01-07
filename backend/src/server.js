import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import SpendingsRoutes from "./routes/spendings.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());

app.use("/spendings", SpendingsRoutes);

app.listen(process.env.PORT || 3000, () =>
    console.log(`Serveur lancé sur le port ${process.env.PORT || 3000}`)
);

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'application de gestion des dépenses !");
});

export default app;
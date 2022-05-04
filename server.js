const { PrismaClient } = require("@prisma/client");
const express = require("express");

const app = express();
const port = 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

app.get("/explorers", async (req, res) => {
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get("/explorers/:id", async (req, res) => {
    const { id } = req.params;
    const explorer = await prisma.explorer.findUnique({
        where: { id: parseInt(id) },
    });
    res.json(explorer);
});

app.post("/explorers", async (req, res) => {
    const { name, username, mission } = req.body;
    const explorer = { name, username, mission };
    const message = "Explorer creado.";
    await prisma.explorer.create({ data: explorer });
    res.json({ message });
});

app.put("/explorers/:id", async (req, res) => {
    const { id } = req.params;
    const { name, username, mission } = req.body;
    const explorer = { name, username, mission };
    const message = "Explorer actualizado.";
    await prisma.explorer.update({
        where: { id: parseInt(id) },
        data: explorer,
    });
    res.json({ message });
});

app.delete("/explorers/:id", async (req, res) => {
    const { id } = req.params;
    const message = "Explorer eliminado.";
    await prisma.explorer.delete({ where: { id: parseInt(id) } });
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Listening to resquests at http://localhost:${port}`);
});

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

app.listen(port, () => {
    console.log(`Listening to resquests at http://localhost:${port}`);
});

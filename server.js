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
    const id = parseInt(req.params.id);
    const explorer = await prisma.explorer.findUnique({ where: { id: id } });
    res.json(explorer);
});

app.post("/explorers", async (req, res) => {
    const explorer = { ...req.body };
    const message = "Explorer creado.";
    await prisma.explorer.create({ data: explorer });
    res.json({ message });
});

app.put("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const explorer = { ...req.body };
    const message = "Explorer actualizado.";
    await prisma.explorer.update({
        where: { id: id },
        data: explorer,
    });
    res.json({ message });
});

app.delete("/explorers/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const message = "Explorer eliminado.";
    await prisma.explorer.delete({ where: { id: id } });
    res.json({ message });
});

app.get("/students", async (req, res) => {
    const allStudents = await prisma.student.findMany({});
    res.json(allStudents);
});

app.get("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const student = await prisma.student.findUnique({ where: { id: id } });
    res.json(student);
});

app.post("/students", async (req, res) => {
    const student = { ...req.body };
    const message = "Student creado.";
    await prisma.student.create({ data: student });
    res.json({ message });
});

app.put("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const student = { ...req.body };
    const message = "Student actualizado.";
    await prisma.student.update({
        where: { id: id },
        data: student,
    });
    res.json({ message });
});

app.delete("/students/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const message = "Student eliminado.";
    await prisma.student.delete({ where: { id: id } });
    res.json({ message });
});

app.listen(port, () => {
    console.log(`Listening to resquests at http://localhost:${port}`);
});

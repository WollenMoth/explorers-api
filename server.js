const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;

const corsOptions = {
    origin: "http://localhost:3000",
};

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors(corsOptions));

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
    try {
        const explorer = { ...req.body };
        const message = "Explorer created";
        await prisma.explorer.create({ data: explorer });
        res.status(201).json({ message });
    } catch (error) {
        if (error.code === "P2002")
            res.status(400).json({
                detail: "Nombre o username ya está en uso, elije otro",
            });
    }
});

app.put("/explorers/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const explorer = { ...req.body };
        const message = "Explorer updated";
        await prisma.explorer.update({
            where: { id: id },
            data: explorer,
        });
        res.json({ message });
    } catch (error) {
        if (error.code === "P2002")
            res.status(400).json({
                detail: "Nombre o username ya está en uso, elije otro",
            });
    }
});

app.delete("/explorers/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const message = "Explorer deleted";
        await prisma.explorer.delete({ where: { id: id } });
        res.json({ message });
    } catch (error) {
        if (error.code === "P2025")
            res.status(400).json({
                detail: "Explorer no existente",
            });
    }
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
    try {
        const student = { ...req.body };
        const message = "Student created";
        await prisma.student.create({ data: student });
        res.status(201).json({ message });
    } catch (error) {
        if (error.code === "P2002")
            res.status(400).json({
                detail: "Nombre ya está en uso, elije otro",
            });
    }
});

app.put("/students/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const student = { ...req.body };
        const message = "Student updated";
        await prisma.student.update({
            where: { id: id },
            data: student,
        });
        res.json({ message });
    } catch (error) {
        if (error.code === "P2002")
            res.status(400).json({
                detail: "Nombre ya está en uso, elije otro",
            });
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const message = "Student deleted";
        await prisma.student.delete({ where: { id: id } });
        res.json({ message });
    } catch (error) {
        if (error.code === "P2025")
            res.status(400).json({
                detail: "Estudiante no existente",
            });
    }
});

app.listen(port, () => {
    console.log(`Listening to requests at http://localhost:${port}`);
});

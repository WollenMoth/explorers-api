const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
            where: { name: "Woopa" },
            update: {},
            create: {
                name: "Woopa",
                username: "ajolonauta",
                mission: "Node",
            },
        });

        const woopa1 = await prisma.explorer.upsert({
            where: { name: "Woopa 1" },
            update: {},
            create: {
                name: "Woopa 1",
                username: "ajolonauta1",
                mission: "Node",
            },
        });

        const woopa2 = await prisma.explorer.upsert({
            where: { name: "Woopa 2" },
            update: {},
            create: {
                name: "Woopa 2",
                username: "ajolonauta2",
                mission: "Java",
            },
        });

        const woopa3 = await prisma.explorer.upsert({
            where: { name: "Woopa 3" },
            update: {},
            create: {
                name: "Woopa 3",
                username: "ajolonauta3",
                mission: "Node",
            },
        });

        console.log("Create 4 explorers:");
        for (const explorer of [woopa, woopa1, woopa2, woopa3])
            console.log(explorer);

        const student1 = await prisma.student.upsert({
            where: { name: "Student 1" },
            update: {},
            create: {
                name: "Student 1",
                lang: "Java",
                missionCommander: "Fernanda Ochoa",
            },
        });

        const student2 = await prisma.student.upsert({
            where: { name: "Student 2" },
            update: {},
            create: {
                name: "Student 2",
                lang: "JavaScript",
                missionCommander: "Carlo Gilmar",
            },
        });

        const student3 = await prisma.student.upsert({
            where: { name: "Student 3" },
            update: {},
            create: {
                name: "Student 3",
                lang: "Java",
                missionCommander: "Fernanda Ochoa",
            },
        });

        const student4 = await prisma.student.upsert({
            where: { name: "Student 4" },
            update: {},
            create: {
                name: "Student 4",
                lang: "JavaScript",
                missionCommander: "Carlo Gilmar",
            },
        });

        console.log("Create 4 students:");
        for (const student of [student1, student2, student3, student4])
            console.log(student);

        const carlo = await prisma.missionCommander.upsert({
            where: { name: "Carlo Gilmar" },
            update: {},
            create: {
                name: "Carlo Gilmar",
                username: "carlogilmar",
                mainStack: "JavaScript",
            },
        });

        const fernanda = await prisma.missionCommander.upsert({
            where: { name: "Fernanda Ochoa" },
            update: {},
            create: {
                name: "Fernanda Ochoa",
                username: "fernandaochoa",
                mainStack: "Java",
            },
        });

        console.log("Create 2 mission commanders:");
        for (const missionCommander of [carlo, fernanda])
            console.log(missionCommander);
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

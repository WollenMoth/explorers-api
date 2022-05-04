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
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();

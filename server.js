const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

app.listen(port, () => {
    console.log(`Listening to resquests at http://localhost:${port}`);
});

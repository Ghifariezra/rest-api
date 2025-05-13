import express from "express";
import routes from "./routes/routes.js";
import logs from "./middleware/logs.js";

const PORT = 4000;
const app = express();

app.use(express.json());

app.use(logs);
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
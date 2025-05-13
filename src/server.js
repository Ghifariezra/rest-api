import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import logs from "./middleware/logs.js";
import path from "path";

const PORT = 4000;
const publicPath = path.join(process.cwd(), "src", "public", "assets");
const app = express();

app.use(cors({
    origin: "https://ghifariezraramadhan-portofolio.vercel.app",
    methods: ["GET"],
    credentials: true
}));  
app.use(express.json());
app.use("/assets", express.static(publicPath));
app.use(logs);
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import logs from "./middleware/logs.js";
import path from "path";

const PORT = 4000;
const publicPath = path.join(process.cwd(), "src", "public", "assets");
const app = express();

const allowedOrigins = [
    "https://ghifariezraramadhan-portofolio.vercel.app",
    "http://localhost:3000"
];

app.use(cors({
    origin: function (origin, callback) {
        // Kalau tidak ada origin (misal dari Postman), izinkan
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
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
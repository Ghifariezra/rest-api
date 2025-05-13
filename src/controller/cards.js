import fs from "fs";
import path from "path";

const cardPath = path.join(process.cwd(), "src", "data", "cardsProject.json");

const cardsController = (req, res) => {
    fs.readFile(cardPath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
}

export default cardsController
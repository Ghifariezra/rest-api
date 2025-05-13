import fs from "fs";
import path from "path";

const greetingController = (req, res) => {
    res.send(
        "<h1>Welcome to my Rest API</h1>"
    );
}

const cardsController = (req, res) => {
    const cardPath = path.join(process.cwd(), "src", "data", "cardsProject.json");

    fs.readFile(cardPath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
}

const certificateController = (req, res) => {
    const certificatePath = path.join(process.cwd(), "src", "data", "certificate.json");

    fs.readFile(certificatePath, "utf-8", (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(JSON.parse(data));
        }
    });
}

export { greetingController, cardsController, certificateController }
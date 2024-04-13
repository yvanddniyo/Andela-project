import express from 'express';
import bodyParser from 'body-parser';
import db from "../models";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`app is running at port ${port}`);
    });
});

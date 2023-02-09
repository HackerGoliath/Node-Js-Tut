const express = require('express');
require("../src/db/conn")
const app = express();
const router = require("./routers/men");
const port = process.env.PORT || 8000;
const host = 'localhost';

app.use(express.json());
app.use(router);


app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
});
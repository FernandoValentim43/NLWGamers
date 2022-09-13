import express from "express";
const app = express();
app.get('/ads', (request, response) => {
    return response.json("oi");
});
app.listen(3333);

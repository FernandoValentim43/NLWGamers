import express from "express";


const app = express()

app.get('/ads', (request,response) => {
   return response.json([1,2,3,4,5]);
});

app.listen(3333);
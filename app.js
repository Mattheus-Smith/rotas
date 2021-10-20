const express = require('express');
const app = express();

app.get("/", async (req, res) =>{
    res.send("pagina inicial");
});

app.listen(8080, () =>{
    console.log("serviddor iniciaddo naa porta 8080: http://localhost:8080");
});
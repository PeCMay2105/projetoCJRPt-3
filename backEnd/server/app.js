import express from "express"
import router from "../controller/index.js";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3000,()=>{
    console.log("servidor estutando na porta 3000");
});


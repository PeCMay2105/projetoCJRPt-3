import express from "express"
import { Router } from "express";

const app = express();
const router = new Router()
app.use(express.json());

app.use(router);

/* app.listen(3030,()=>{
    console.log("servidor estutando na porta 3000");
}); */

export default app
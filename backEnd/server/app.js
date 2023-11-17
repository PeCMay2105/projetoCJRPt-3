import express from "express"

const app = express()

app.use(express.json())


app.get("/feed",()=>{
    console.log("teste")
})

app.post("/postar",(req)=>{
    console.log(req.body)
})

export default app;

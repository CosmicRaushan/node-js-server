import express from 'express';


const app =  express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({
        message: "Hello Wrold from the production level code.."
    });
})

app.get("/api/v1", (req, res) => {
    return res.json({
        message: "Hello Wrold from the production level code.."
    });
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
})
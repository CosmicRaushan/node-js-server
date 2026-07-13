import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello World from the production-level code.',
    });
});

app.get('/health', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
    });
});

app.use((req, res) => {
    return res.status(404).json({
        error: 'Not Found',
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
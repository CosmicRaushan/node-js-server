import express from 'express';
import { setupRoutes } from './routes.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
setupRoutes(app);

app.use((req, res) => {
    return res.status(404).json({
        error: 'Not Found',
    });
});

export { app, PORT };
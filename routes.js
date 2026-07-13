export function setupRoutes(app) {
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
}

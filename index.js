import { app, PORT } from './server.js';

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
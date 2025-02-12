const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}).on('error', (err) => {
    console.error('Server Error:', err.message);
});

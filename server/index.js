const express = require('express');
const cors= require('cors');
const app = express();


app.use(cors());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// API endpoint for form submission
app.post('/api/user', (req, res) => {
    const { name, email, phone } = req.body;
    // Here you can process the form submission ,validation etc, e.g., save to a database
    console.log('Form submitted:', { name, email, phone });
    res.json({ success: true });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
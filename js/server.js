const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../'))); // Serve static files from the parent directory

// Email sending endpoint
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: "All fields are required." });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'arjheezyb@gmail.com',
            pass: 'ubpxxifpbjlqfukc'
        }
    });

    const mailOptions = {
        from: email, 
        to: 'arjheezyb@gmail.com',
        replyTo: email,
        subject: `New Message from ${name}`, // Subject line
        text: `
            You have received a new message from your contact form:
    
            ------------------------------
            Name: ${name}
            Email: ${email}
            Message:
            ${message}
            ------------------------------
            
            Please respond to the sender if necessary.
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, error: error.toString() });
        }
        res.status(200).json({ success: true });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
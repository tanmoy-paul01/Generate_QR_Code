import express from 'express';
import qr from 'qr-image';
import fs from'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json()); // Required to parse JSON body
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/generated_qr', express.static(path.join(__dirname, 'generated_qr')));

// Endpoint to generate QR

app.post('/generate', (req, res) => {
    const url = req.body.url;

    if (!url) {
        return res.status(400).json({error: 'URL is required'});
    }
    const fileName = `qr_${Date.now()}.png`;
    const filePath = path.join(__dirname, 'generated_qr', fileName);
    const qr_png = qr.image(url, { type: 'png' });

    qr_png.pipe(fs.createWriteStream(filePath));

    //Save the URL to txt file
    fs.appendFile('url.txt', url + '\n', (err) =>{
        if(err) console.error('Failed to save URL: ', err);
    });

    // Send back path to client
    res.json({ qrUrl: `/generated_qr/${fileName}`});
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

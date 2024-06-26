const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Ensure uploads folder exists
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Handle file upload
app.post('/upload', upload.single('picture'), (req, res) => {
  const title = req.body.title;
  const picturePath = req.file.path;
  const pictureData = { title, path: picturePath };

  const jsonPath = path.join('uploads', 'pictures.json');

  let pictures = [];
  if (fs.existsSync(jsonPath)) {
    const jsonData = fs.readFileSync(jsonPath);
    pictures = JSON.parse(jsonData);
  }
  pictures.push(pictureData);
  fs.writeFileSync(jsonPath, JSON.stringify(pictures, null, 2));

  res.send('File uploaded successfully');
});

// Endpoint to get list of pictures
app.get('/pictures', (req, res) => {
  const jsonPath = path.join('uploads', 'pictures.json');
  if (fs.existsSync(jsonPath)) {
    const jsonData = fs.readFileSync(jsonPath);
    const pictures = JSON.parse(jsonData);
    res.json(pictures);
  } else {
    res.json([]);
  }
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

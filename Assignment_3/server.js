const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/textAnalysis', (req, res) => {
    const vowels = req.body.vowels;
    const consanants = req.body.consanants;
    res.json({
        message: `There are ${vowels} vowels and ${consanants} consanants`
    });
});
app.post('/api/BMIcalc', (req, res) => {
    const BMI = req.body.BMI;
    res.json({
        message: `Your BMI is: ${BMI}`
    });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

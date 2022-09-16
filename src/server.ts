import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    res.json([
        { key: 1, value: 'Acessou Ads!' },
        { key: 2, value: 'Acessou Ads!' },
        { key: 3, value: 'Acessou Ads!' },
        { key: 4, value: 'Acessou Ads!' },
        { key: 5, value: 'Acessou Ads 6!' },
    ]);
});

app.listen(3333);
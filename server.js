const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAMEr
});

db.connect((err)=>{
     if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
     }
    
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('App running on ECS Fargate with RDS!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const express=require('express');
const bodyParse=require('body-parser');
const pdf=require('html-pdf');
const cors=require('cors');
const pdfTemplate=require('./documents');

const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParse.json());

app.listen(port,()=>console.log(`Listening on port ${port}`));
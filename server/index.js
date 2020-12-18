import express from 'express';
import path from 'path';
import parser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;


app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'))
});

app.listen(port, () => console.log(`Connected to PORT: ${port}`))
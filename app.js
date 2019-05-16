const express = require ("express");
const app = express();
const hostname = 'localhost';
const port = 8080;
const path = require ('path');

app.listen(port, hostname, () => {
  console.log(`Server running up and running at localhost:8080`);
});

app.use(express.static('C:/revature/revature-p2/FrontEnd/'));

app.get('/', (req,res) =>{
  res.sendFile(path.join(__dirname + `/FrontEnd/index.html`))
});
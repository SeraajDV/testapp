const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000
const app = express();
const cors = require('cors');

const person = {
  name: 'John'
}

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.send(person)
})

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'frontend/build')));
  app.get('*', function(req, res){
   res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
 });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
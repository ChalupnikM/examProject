const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors());
const path = require('path');

app.get('*', cors(), (req, res, next) => {
  console.log("'/test' call", req.path);
  axios.get(`https://unsplash.com/nautocomplete${req.path}`)
    .then(response => res.json(response.data))
    .catch(err => next(err));
})

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}
// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });

//app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log('Server running on port: ', port)
});
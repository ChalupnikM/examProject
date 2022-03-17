const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

app.use(cors()); 

app.get('*', cors(), (req, res, next) => {
    console.log("'/test' call", req.path);
    axios.get(`https://unsplash.com/nautocomplete${req.path}`)
      .then(response => res.json(response.data))
      .catch(err => next(err));
  })

// app.listen(3000, function () {
//   console.log('Listening on port 3000');
// });

app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 8080);
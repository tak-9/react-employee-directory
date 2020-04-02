var path = require("path");
var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();

app.use(express.static(path.join(__dirname, 'client','build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'client','index.html'));
});

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
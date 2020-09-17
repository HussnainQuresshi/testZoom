const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

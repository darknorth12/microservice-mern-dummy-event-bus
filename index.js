const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const PORT = 4005;

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  console.log(req.body);
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);
  axios.post("http://localhost:4003/events", event);

  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.all("/*", (req, res) => {
  console.log(req.body, '12--------')
  const requestId = req.headers["x-fc-request-id"];
  console.log("FC Invoke Start RequestId: " + requestId);

  res.send(
    JSON.stringify(req.body)
  );

  console.log("FC Invoke End RequestId: " + requestId);
});

app.listen(9000, () => {
  console.log("Express started on port 9000");
});

const express = require("express");
const { sub, add } = require("./add");
const app = express();

var k = sub(1,2)
var l = add(1,1)
app.use(express.json());
app.listen(4000, () => {
    console.log(`Server is running on port 4000`+ l);
  });

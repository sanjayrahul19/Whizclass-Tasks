const express = require("express");
const fs = require("fs");

const path = require("path");

const app = express();

app.use("/images", express.static("images"));

app.get("/data", (req, res) => {
  const timeStamp = Date.now();

  var date = new Date().toDateString();

  var dateCheck = new Date();
  var hour = dateCheck.getHours();
  var minute = dateCheck.getMinutes();
  var second = dateCheck.getSeconds();

  const time = `(${hour}-${minute}-${second})`;
  if (!fs.existsSync("timeStamp")) {
    fs.mkdirSync("timeStamp");
    fs.writeFile(path.resolve("timeStamp", `${date + time}.txt`), (err) => {
      if (err) {
        console.log(err);
      }
      console.log("file created");
    });
  }

  fs.writeFile(
    `${__dirname}/timeStamp/${date + time}.txt`,

    timeStamp.toLocaleString(),
    function (err) {
      if (err) throw err;
      res.send(
        path.resolve(
          `<br> <img src=' ./images/img1.png' height='20px' width='20px' /> timeStamp 
                    <br>
                        <img src=' ./images/img2.png' height='20px' width='20px' /> 
           ${date + time}.txt`
        )
      );
    }
  );
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Up and running");
});

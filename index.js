const port = process.env.PORT;
const app = require("./app")

app.listen(port, () => {
  console.log("Server is  up on port : " + port);
});

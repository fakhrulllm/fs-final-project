const express = require('express')
const app = express()
const port = 5000
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

const routers = require("./routers")
app.use(routers)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
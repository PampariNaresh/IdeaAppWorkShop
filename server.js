const express = require('express')
const serverConfig = require("./configs/server.config")
const app = express()
const port = 3000

app.listen(serverConfig.PORT, () => {
    console.log(`Example app listening on port ${serverConfig.PORT}`)
})
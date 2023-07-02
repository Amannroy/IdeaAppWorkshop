const express = require('express');
const serverConfig = require('./Configs/server.config');

const app = express();

app.listen(serverConfig.PORT,()=>{
    console.log(`Server started on port number ${serverConfig.PORT}`);
})
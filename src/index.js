const express=require("express");
const { ServerConfig}=require("./config");
const apiRouters=require('./routers');

const app=express();

app.use('/api',apiRouters);


app.listen(ServerConfig.PORT,()=>{
    console.log(`Started ther server on Port :${ServerConfig.PORT}`);
});
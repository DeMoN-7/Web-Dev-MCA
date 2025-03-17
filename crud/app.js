const express= require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("heyff");
})
app.listen(3000);
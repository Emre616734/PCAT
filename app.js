const express = require('express')
const app = express()
const MyLogger = (req,res,next) =>{
     console.log('Midlware log 1')
     next();
}
app.use(express.static('temp'))
app.use(MyLogger);
app.get('/',(req,res)=>{
    const photo = {
        id:1,
        name:"Yunus",
        surname : "Yılmaz"
    }
  res.send(photo);
    })
const port = 4000
app.listen(port,()=>{
    console.log('Sunucu 4000 de çalışıyor...')
})

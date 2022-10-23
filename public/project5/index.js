const express = require('express')
const app = express()
reruire('dotenv').config();
const path = required('path')

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT,()=>{
    console.log('server atart at port ${PORT}')
})
const express=require('express');
const expressLayouts=require('express-layouts');
const mongoose=require('mongoose')
const app=express();

//DB CONFIG
const db=require('./config/keys').MongoURI;
mongoose.connect(db,{ useNewUrlParser: true})
.then(()=> console.log('MongoDB Connected...'))
.catch( err=> console.log(err));


app.use(expressLayouts);
app.set('view engine','ejs');

//routes
app.use(express.urlencoded({extended: false}));
app.use('/',require('./routes/index'))

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log('server started at port 5000'))
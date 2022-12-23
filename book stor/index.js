const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db = require('./config/db');
const Books = require('./models/book');
app.use(bodyparser());
app.set('view engine', 'ejs');

app.get('/', async (req,res) => {

    Bookdata = await Books.find({});

    res.render('home.ejs',{
        Bookdata
    });
});

db.mongoose.connect(db.url).then(() => {
    console.log('DB server connected');
}).catch((err) =>{
    console.log('Err++',err);
});

app.post('/createBook', async (req,res) => {
    await Books.create(req.body);
    const Bookdata = await Books.find({});
    res.redirect('/');
});

app.get('/addquantity/:id', async (req,res) => {
    const Bookdata = await Books.findById(req.params.id);
    Bookdata.quantity = Bookdata.quantity + 1;
    Bookdata.save();
    res.redirect('/');
});

app.get('/minquantity/:id', async (req,res) => {
    Bookdata = await Books.findById(req.params.id);

    if(Bookdata.quantity < 2){
       return res.redirect('/');
    }
    Bookdata.quantity = Bookdata.quantity - 1;
    Bookdata.save();
    return res.redirect('/');
});

app.get('/deletebook/:id', async (req,res) => {
    const id = req.params.id;
    Bookdata = await Books.findByIdAndDelete(id);
    res.redirect('/');
});

app.get('/editbook/:id', async (req,res) => {
    const id = req.params.id;
    console.log(id);
    const newdata = await Books.findById(id);
    
    res.render('editbook.ejs',{
        id : newdata._id,
        name : newdata.name,
        price : newdata.price,
        quantity : newdata.quantity,
        description : newdata.description,
        category : newdata.category
    });
});

app.post('/upadateBook/:id', async (req,res) => {
    const id = req.params.id;

    Bookdata = await Books.findByIdAndUpdate(id,req.body);

    res.redirect('/');
})



app.listen(4141,() =>{
    console.log('server port');
});
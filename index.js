import express from 'express';

const app =express();

//middleware
function check_route(req,resp,next){
console.log('user is accessing' +req.url)
next();
}

app.use(check_route);

//route
app.get('/',(req,resp)=>{
    resp.send('welcome to home page')
});

app.get('/users',(req,resp)=>{
    resp.send('Users Page')
});


app.get('/products',(req,resp)=>{
    resp.send('Products Page')
});


app.listen(1000,(req,resp)=>{
    console.log('server is running at port 1000')
});
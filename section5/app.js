const express = require('express');

const app = express();

app.use('/', (req, res, next)=>{
	console.log("This always runs");
	next();
})

app.use('/add-product', (req, res, next)=>{
	console.log('In Another middleware!');
	res.send('<h1>THe ADD PRODUCT</h1>');
});

app.use('/', (req, res, next)=>{
	console.log('In Another middleware!');
	res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

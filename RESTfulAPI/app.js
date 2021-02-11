const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const mongoUserPassword = process.env.MONGO_ATLAS_PW;
mongoose.connect('mongodb+srv://geekyskr:'+'MongodB3007'+'@node-rest-shop.2y2vu.mongodb.net/<dbname>?retryWrites=true&w=majority', {
	useNewUrlParser: true, 
	useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(cors());
app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


//if we don't find any routes error occur and it comes to this line
app.use((req, res, next)=>{
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
})

app.use((error, req, res, next)=>{
	res.status(error.status || 500);
	res.json({
		error:{
			message : error.message
		}
	});
});

module.exports = app;

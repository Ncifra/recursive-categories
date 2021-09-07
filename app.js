require('dotenv').config()
const express = require('express');
const {sequelize} = require('./models/index');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const categoriesRouter = require('./routes/categories');
const app = express();

sequelize.sync().catch((err)=>{
    console.error(err)
    process.exit(1)
})

app.use(logger('dev'));
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./openapi.json');

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/categories', categoriesRouter);
app.use(async (err, req, res, next) => {
    if(process.env.NODE_ENV !== 'test') {
        console.error(err.stack)
    }
    return res.status(err.status || 500).json({message: err.message})
})

module.exports = app;



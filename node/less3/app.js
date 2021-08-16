const express = require('express');
const { userRouter } = require('./routes');

const app = express();
const { constants } = require('./constants');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);

app.listen(constants.PORT, () => console.log(constants.PORT));

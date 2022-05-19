require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mediasRouter = require('./routes/medias');
const chaptersRouter = require('./routes/chapters');
const orderPaymentsRouter = require('./routes/orderPayments');
const refreshTokenRouter = require('./routes/refreshToken')
const mentorsRouter = require('./routes/mentors')
const lessonsRouter = require('./routes/lessons')
const imageRouter = require('./routes/imageCourses')
const myCoursesRouter = require('./routes/myCourses')
const reviewRouter = require('./routes/reviews')
const webhookRouter = require('./routes/webhook')

const verifyToken = require('./middlewares/verifiedToken')
const can = require('./middlewares/permissions')

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', verifyToken, can('admin', 'student'), mediasRouter);
app.use('/orders', verifyToken, can('admin', 'student'), orderPaymentsRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/mentors', verifyToken, can('admin'), mentorsRouter);
app.use('/chapters',verifyToken, can('admin'), chaptersRouter);
app.use('/lessons', verifyToken, can('admin'), lessonsRouter);
app.use('/image-courses',verifyToken, can('admin'), imageRouter);
app.use('/my-courses', verifyToken, can('admin', 'student'), myCoursesRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewRouter);
app.use('/webhook', webhookRouter);

module.exports = app;

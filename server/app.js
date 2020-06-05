const express = require('express');
const app = express();

const fishesRoutes = require('./routes/fishes');
const morgan = require('morgan');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/fishes', fishesRoutes);

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

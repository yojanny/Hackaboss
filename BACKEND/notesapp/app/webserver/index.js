'use strict';

const express = require('express');
/*
const accountRouter = require('./routes/account-router');
const authRouter = require('./routes/auth-router');
*/
const {
  accountRouter,
  authRouter,
  noteRouter,
  tagRouter,
  userRouter,
} = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', accountRouter);
app.use('/api', authRouter);
app.use('/api', noteRouter);
app.use('/api', tagRouter);
app.use('/api', userRouter);

let server = null;
async function listen(port) {
  if (server) {
    return server;
  }

  try {
    server = await app.listen(port);
    return server;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function close() {
  if (server) {
    await server.close();
    server = null;
  } else {
    console.error('Can not close a non started server');
  }
}

module.exports = {
  listen,
  close,
};

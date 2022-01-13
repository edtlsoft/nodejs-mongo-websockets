const express =  require('express');
const message = require('../components/message/network');

const routes = (server) => {
  server.use('/messages', message)
  return server;
}

module.exports = routes;

const response = {};

response.success = (req, res, message, statusCode = 200) => {
  return res.status(statusCode).send({
    error: "",
    body: message,
  });
};

response.error = (req, res, message, statusCode = 200) => {
  return res.status(statusCode).send({
    error: message,
    body: "",
  });
};

module.exports = response;

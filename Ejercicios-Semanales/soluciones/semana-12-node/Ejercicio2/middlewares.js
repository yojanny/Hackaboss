function isAuthorized(req, res, next) {
  const { secret } = req.body;

  if (secret === process.env.SECRET) {
    return next();
  }

  // res.status(401).send({
  //   status: "error",
  //   message: "Not authorized",
  // });

  const error = new Error("Not authorized");
  error.httpStatus = 401;
  return next(error);
}

module.exports = {
  isAuthorized,
};

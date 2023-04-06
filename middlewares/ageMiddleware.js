const ageMiddleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Enter your age")
  } else if (req.query.age < 18) {
    res.send("Sorry, you are under age")
  } else {
    next();
  }
};

module.exports=ageMiddleware;

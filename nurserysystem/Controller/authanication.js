const jwt = require("jsonwebtoken");
const Teachers = require("../Model/teacher");
exports.login = (req, res, next) => {
  let token;
  
  if (
    req.body.username == "admin" &&
    req.body.password == process.env.ADMIN_PASSWORD
  ) {
  
    token = jwt.sign(
      { role: "admin", username: "admin" },
      process.env.secret_key,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "loged in", token });
  } else {
    Teachers.findOne({
      username: req.body.firstname,
      password: req.body.password,
    })
      .then((data) => {
        if (data == null) next(new Error("not authntcated"));
        token = jwt.sign(
          { role: "teacher", username: data.firstname, id: date._id },
          process.env.secret_key,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({ message: "loged in", token });
      })
      .catch((err) => next(err));

    let errObj = new Error("not Auhenticated!");
    errObj.status = 403;
    throw errObj;
  }
};
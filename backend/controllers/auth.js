const User = require("../models/index").User;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email, password }, raw: true });

  if (!user) {
    res.status(403).send({ message: "Incorrect email or password" });
  } else {
    if (req.session.id) {
      res.status(202).send({ message: "Already logged it" });
    } else {
      req.session.id = user.id;
      req.session.token = user.token;
      res.status(200).send({
        message: "Successful login", details: {
          id: user.id,
          name: user.firstName + " " + user.lastName,
          isAdmin: user.isAdmin
        }
      });
    }
  }
}

const checkLogin = async (req, res, next) => {
    const { token, id } = req.session;

    if (!token || !id) {
        res.status(403).send({ message: "Forbidden" });
    } else {
        const user = await User.findOne({ where: { token, id }, raw: true });

        if (!user) {
        res.status(403).send({ message: "Forbidden" });
        } else {
        next();
        }
    }
};

const logout = async (req, res) => {
    req.session.reset();
    res.status(200).send({ message: "Successful logout" });
}

module.exports = {
    login,
    logout,
    checkLogin
};
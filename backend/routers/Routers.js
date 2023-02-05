const Router = require("express").Router();
const Services = require("../services/UserAuthenticationService");

const UserAuthRouter = () => {
  Router.get("/login/:user", async () => {
    try {
      const userInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        UserId: req.body.UserID,
      };
      Services.UserAuthentication(userInfo);
      console.log();
    } catch (e) {
      next(e);
    }
  });
};

module.exports = { UserAuthRouter };

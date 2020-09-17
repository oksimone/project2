// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/curate");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/curate");
    }
    res.render("login");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/curate", isAuthenticated, (req, res) => {
    // if (curateComplete) {
    //   res.redirect("/results");
    // }
    res.render("curate");
  });

  app.get("/results", isAuthenticated, (req, res) => {
    res.render("results");
  });

  app.get("/watchlist", (req, res) => {
    res.render("watchlist");
  });
};

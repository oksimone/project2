// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const db = require("../models");

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

  app.get("/watchlist", isAuthenticated, (req, res) => {
    const userID = req.user.id;
    db.Movie.findAll({ where: { UserId: userID, onPlaylist: true } }).then(
      results => {
        res.render("watchlist", { Movie: results });
      }
    );
  });

  app.get("/moreInfo", isAuthenticated, (req, res) => {
    res.render("moreInfo");
  });

  app.get("/moreInfo/:id", isAuthenticated, (req, res) => {
    res.render("moreInfo");
  });

  app.get("/favorites", isAuthenticated, (req, res) => {
    const userID = req.user.id;
    db.Movie.findAll({ where: { UserId: userID, isFavorite: true } }).then(
      results => {
        res.render("favorites", { Movie: results });
      }
    );
  });

  app.get("/watched", isAuthenticated, (req, res) => {
    const userID = req.user.id;
    db.Movie.findAll({ where: { UserId: userID, hasWatched: true } }).then(
      results => {
        res.render("watched", { Movie: results });
      }
    );
  });
};

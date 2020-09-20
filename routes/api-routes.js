// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const axios = require("axios");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for movie storage
  app.post("/api/movielist", (req, res) => {
    db.Movie.create({
      title: req.body.title,
      id: req.body.id,
      hasWatched: false,
      onPlaylist: false,
      isFavorite: false,
      genre: req.body.genre,
      backDrop: req.body.backDrop,
      poster: req.body.poster,
      releaseDate: req.body.releaseDate,
      description: req.body.description,
      UserId: req.user.id
    }).then(response => {
      res.json(response);
    });
  });

  //route for finding all movies user has seen in a search
  app.get("/api/movielist", (req, res) => {
    db.Movie.findAll({ where: { UserId: req.user.id } }).then(result => {
      return res.json(result);
    });
  });

  //route for updating movielist entries for user
  app.put("/api/moreinfo/:id", (req, res) => {
    db.Movie.update(req.body, {
      where: { UserId: req.user.id, id: req.params.id }
    }).then(dbMovie => {
      res.json(dbMovie);
    });
  });

  //route for grabbing most recent search results to display on results page
  app.get("/api/searchresults", (req, res) => {
    db.Movie.findAll({ limit: 10, order: [["createdAt", "DESC"]] }).then(
      result => {
        return res.json(result);
      }
    );
  });

  //route for more info with a certain movie
  app.get("/api/moreinfo/:id", (req, res) => {
    db.Movie.findAll({
      where: { UserId: req.user.id, id: req.params.id }
    }).then(result => {
      return res.json(result);
    });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //route for initializing search query
  app.get("/api/movies/g/:genre", (req, res) => {
    const queryURL =
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
      process.env.MOVIEDB_KEY +
      "&language=en-US&with_genres=" +
      req.params.genre;
    console.log(queryURL);
    axios.get(queryURL).then(response => {
      res.json(response.data);
    });
  });
};

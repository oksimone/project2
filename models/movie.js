module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    // The title will be grabbed from the api's original_title
    title: {
      type: DataTypes.STRING
    },
    // The id will be grabbed from the api's id for the movie
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    //This determines if the movie has been watched or not
    hasWatched: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    //This determines if the movie has been added to the watch list
    onPlaylist: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    //This determines if the movie has been added to favorites
    isFavorite: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    //The main genre name and id will be grabbed from the api
    genre: {
      type: DataTypes.STRING
    },
    //This contains the link to the backdrop image from the api
    backDrop: {
      type: DataTypes.STRING
    },
    //This contains the link to the poster image from the api
    poster: {
      type: DataTypes.STRING
    },
    //This contains the release date of the movie
    releaseDate: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  });

  //Grab the user login info, just the email, to reference with foreign key
  Movie.associate = models => {
    Movie.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Movie;
};

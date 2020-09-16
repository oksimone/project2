module.exports = function(sequelize, DataTypes) {
  const Movie = sequelize.define("Movie", {
    // The title will be grabbed from the api's original_title
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // The id will be grabbed from the api's id for the movie
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    //This determines if the movie has been watched or not
    hasWatched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    //The main genre name and id will be grabbed from the api
    genre: {
      name: DataTypes.STRING,
      id: DataTypes.INTEGER
    }
  });
  return Movie;
};

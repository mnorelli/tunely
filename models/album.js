var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  artistName: String,
  name: String,
  releaseDate: String,
  genres: Array,
})

var Albums = mongoose.model(
  )
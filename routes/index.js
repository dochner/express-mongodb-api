const express = require("express");
const movieModel = require("../models/movies/movie");
const app = express();

app.get("/movies", async (request, response) => {
  const movies = await movieModel.find({});

  try {
    response.send(movies);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/movie", async (request, response) => {
  const movie = new movieModel(request.body);

  try {
    await movie.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/movie/:id", async (request, response) => {
  try {
    await movieModel.findByIdAndUpdate(request.params.id, request.body);
    await movieModel.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.patch("/movie/:id", async (request, response) => {
  try {
    await movieModel.findByIdAndUpdate(request.params.id, request.body);
    await movieModel.save();
    response.send(movie);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
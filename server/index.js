const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const moviesData = require("./data.json");
app.prepare().then(() => {
  const server = express();

  server.get("/api/v1/movies", (req, res) => {
    res.json(moviesData);
  });

  server.get(`/api/v1/movies/:id`, (req, res) => {
    const { id } = req.params;

    const movie = moviesData.find((m) => m.id === id);

    return res.json(movie);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});

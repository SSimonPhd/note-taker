// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const express = require("express");
let path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  app.use(express.static(path.join(__dirname, "../public")));

  // HTML GET Requests
  // ---------------------------------------------------------------------------

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // If no matching route is found default to home
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};

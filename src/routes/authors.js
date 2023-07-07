const express = require("express");
const router = express.Router();
const getAuthorRouter = require("../controllers/getAuthor");
const getAuthorById = require("../controllers/getAuthorById")
const postAuthor = require("../controllers/postAuthor")
const putAuthor = require("../controllers/putAuthor")
const deleteAuthor = require("../controllers/deleteAuthor");

const Author = require("../models/author");

router.use("/", getAuthorRouter);
router.get("/:id", getAuthorById);
router.post("/", postAuthor)
router.put("/:id", putAuthor)
router.delete("/:id", deleteAuthor)

module.exports = router;

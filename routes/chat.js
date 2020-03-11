const express = require("express"),
  router = express.Router(),
  pullMessages = require("../models/pullMessages"),
  receiveMessage = require("../models/receiveMessage");

router.get("/:language/:afterMessage", async (req, res, next) => {
  const { language, afterMessage } = req.params;
  const message = await pullMessages(language, afterMessage);
  res.json(message);
});
router.get("/:language", async (req, res, next) => {
  const { language } = req.params;
  const message = await pullMessages(language);
  res.json(message);
});
router.put("/", async (req, res, next) => {
  const { account, token, message } = req.body;
  const response = await receiveMessage(account, token, message);
  res.send(response);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const appService = require('./services/app.service');

router.get("/", function (req, res) {
  res.send("GET request to the homepage");
});
router.get("/generate-sticker", async (req, res) => {
  if (!req.query.stickerUrl) { res.send({ error: 'Error missing query string', message: 'stickerUrl is required'}) }
  const {stickerUrl, saved } = req.query;
  const result = await appService.generateSticker(stickerUrl, saved);
  res.send(result)
});

module.exports = router;

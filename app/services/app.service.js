const helpers = require('../helpers/helpers');

module.exports.generateSticker = async (stickerUrl, saved = false) => {
  const sourceHtml = await helpers.getSourceSticker(stickerUrl);
  const generatedStickers = await helpers.generateSticker(sourceHtml);
  await helpers.saveSourceHtml(generatedStickers);
  if(saved) {
    await helpers.saveSourceHtml(generatedStickers)
  }
  return generatedStickers;
};


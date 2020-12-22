const axios = require("axios");

module.exports.programmingMeme = async () => {
  try {
    const res = await axios.get(
      "https://meme-api.herokuapp.com/gimme/programmingmemes"
    );
    const imageArrLen = res.data.preview.length;
    const imageUrl = res.data.preview[imageArrLen - 1];
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

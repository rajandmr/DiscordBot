const { default: Axios } = require("axios");

module.exports.generalMeme = async () => {
  try {
    const res = await Axios.get("https://meme-api.herokuapp.com/gimme");
    console.log(res.data);

    const imageArrLen = res.data.preview.length;
    const imageUrl = res.data.preview[imageArrLen - 1];
    return imageUrl;
  } catch (error) {
    console.log(error);
  }
};

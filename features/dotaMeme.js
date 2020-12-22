const { default: Axios } = require('axios');

module.exports.dotaMeme = async () => {
    try {
        const res = await Axios.get(
            'https://meme-api.herokuapp.com/gimme/Dota2Memes'
        );

        const imageArrLen = res.data.preview.length;
        const imageUrl = res.data.preview[imageArrLen - 1];
        return imageUrl;
    } catch (error) {
        console.log(error);
    }
};

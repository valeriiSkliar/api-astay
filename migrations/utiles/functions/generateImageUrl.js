var {generateRandomHexColor} = require('./generateRandomHexColor');

function generateImageUrl(index) {
  let background_color = null;
  let font_color = null;

  // try {
  //   background_color = generateRandomHexColor();
  //   if (!background_color) {
  //     throw new Error('background_color is null');
  //   }

  //   font_color = generateRandomHexColor();
  //   if (!font_color) {
  //     throw new Error('font_color is null');
  //   }
  // } catch (e) {
  //   console.error('generateImageUrl failed', e);
  //   throw e;
  // }
  const baseImageUrl = '${background_color}/${font_color}?text=${index}.webp';
  const imageUrl = `https://fakeimg.pl/650x650/587246/fff?text=${index}`;

  // console.log(imageUrl);
  return imageUrl;
}

exports.generateImageUrl = generateImageUrl;

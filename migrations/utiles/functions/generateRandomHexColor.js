function generateRandomHexColor() {
  let letters;
  let color = '';
  try {
    letters = '0123456789ABCDEF';
    if (!letters) {
      throw new Error('letters is null');
    }
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  } catch (e) {
    console.error('generateRandomHexColor failed', e);
    throw e;
  }
  return color;
}

exports.generateRandomHexColor = generateRandomHexColor;

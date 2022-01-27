function generateImageUrlFromBuffer(buffer) {
  return `data:image/jpg;base64,${btoa(String.fromCharCode.apply(null, buffer.data))}`;
}

export {
  generateImageUrlFromBuffer
};

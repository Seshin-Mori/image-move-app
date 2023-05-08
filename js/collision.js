function setupCollisionDetection(images) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  images.forEach((image) => {
    image.mask = createCollisionMask(image, ctx);
  });

  function createCollisionMask(image, ctx) {
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = image.width;
    tempCanvas.height = image.height;

    tempCtx.drawImage(image, 0, 0);

    const imageData = tempCtx.getImageData(0, 0, image.width, image.height);
    const mask = [];

    for (let y = 0; y < imageData.height; y++) {
      mask[y] = [];

      for (let x = 0; x < imageData.width; x++) {
        const index = (y * imageData.width + x) * 4;
        const alpha = imageData.data[index + 3];

        mask[y][x] = alpha > 0;
      }
    }

    return mask;
  }
}

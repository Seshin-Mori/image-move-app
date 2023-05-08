function setupMovement(images) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const movingImages = images.map((image) => {
    const speed = Math.random() * 2 + 1;
    const direction = Math.random() * Math.PI * 2;

    return {
      image,
      x: Math.random() * (canvas.width - image.width),
      y: Math.random() * (canvas.height - image.height),
      vx: Math.cos(direction) * speed,
      vy: Math.sin(direction) * speed,
    };
  });

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movingImages.forEach((movingImage) => {
      movingImage.x += movingImage.vx;
      movingImage.y += movingImage.vy;

      if (
        movingImage.x < 0 ||
        movingImage.x + movingImage.image.width > canvas.width
      ) {
        movingImage.vx *= -1;
      }

      if (
        movingImage.y < 0 ||
        movingImage.y + movingImage.image.height > canvas.height
      ) {
        movingImage.vy *= -1;
      }

      ctx.drawImage(movingImage.image, movingImage.x, movingImage.y);
    });

    requestAnimationFrame(update);
  }

  update();
}

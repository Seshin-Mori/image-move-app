document.addEventListener("DOMContentLoaded", () => {
  const uploadButton = document.getElementById("upload-button");
  const fileInput = document.getElementById("file-input");

  uploadButton.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;

    if (files.length === 0) {
      alert("画像ファイルが選択されていません。");
      return;
    }

    if (files.length > 5) {
      alert("画像ファイルは最大5件まで選択できます。");
      return;
    }

    handleFiles(files);
  });

  function handleFiles(files) {
    // ローディング画面の表示
    showLoading();

    const images = [];

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;

        image.onload = () => {
          images.push(image);

          if (images.length === files.length) {
            // 画像アップロードが完了したら、次の処理へ
            processImages(images);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  }

  function processImages(images) {
    // 衝突判定処理、画像の動きやバウンド処理を実行
    setupCollisionDetection(images);
    setupMovement(images);

    // ローディング画面の非表示
    hideLoading();
  }
});

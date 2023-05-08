function showLoadingScreen() {
  const loadingScreen = document.createElement("div");
  loadingScreen.setAttribute("id", "loading-screen");

  const loadingText = document.createElement("p");
  loadingText.textContent = "画像を処理中...";
  loadingScreen.appendChild(loadingText);

  document.body.appendChild(loadingScreen);

  const style = document.createElement("style");
  style.textContent = `
    #loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    }

    #loading-screen p {
      color: white;
      font-size: 24px;
    }
  `;
  document.head.appendChild(style);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    document.body.removeChild(loadingScreen);
  }
}

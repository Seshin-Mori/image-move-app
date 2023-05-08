function showLoading() {
  const loadingElement = document.createElement("div");
  loadingElement.id = "loading";
  loadingElement.innerHTML = "Loading...";
  document.body.appendChild(loadingElement);
}

function hideLoading() {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    document.body.removeChild(loadingElement);
  }
}

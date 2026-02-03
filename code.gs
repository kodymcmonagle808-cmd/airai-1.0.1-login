function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Login - AirAI')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

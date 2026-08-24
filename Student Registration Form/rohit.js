let myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=200, height=100 left=500 right=500");
}

function closeWin() {
  myWindow.close();
}
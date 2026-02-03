function drawNatureEnd() {
  fill(255);
  textSize(22);
  text(
    "Sage shows up.\nShe tells you she’s leaving.\nPeru.\n\nThis is the last time you’ll see her.",
    width / 2,
    height / 2,
  );

  drawButton(width / 2, 400, 260, 60, "Restart");
}

function natureEndMousePressed() {
  const btn = { x: width / 2, y: 400, w: 260, h: 60 };
  if (isOver(btn)) currentScreen = "start";
}

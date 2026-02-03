function drawPartyEnd() {
  fill(255);
  textSize(22);
  text(
    "You wait.\nYour phone stays silent.\n\nMaya never shows up.",
    width / 2,
    height / 2,
  );

  drawButton(width / 2, 400, 260, 60, "Restart");
}

function partyEndMousePressed() {
  const btn = { x: width / 2, y: 400, w: 260, h: 60 };
  if (isOver(btn)) currentScreen = "start";
}

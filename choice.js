function drawChoice() {
  fill(255);
  textSize(26);
  text("Follow where your heart leads", width / 2, 90);

  // Sage
  drawButton(width / 2, 210, 260, 60, "Sage");
  textSize(14);
  text("She loves nature and likes to explore new things.", width / 2, 255);

  // Maya
  drawButton(width / 2, 330, 260, 60, "Maya");
  text("She lives fast.\nNever a dull moment with her.", width / 2, 385);
}

function choiceMousePressed() {
  const sageBtn = { x: width / 2, y: 210, w: 260, h: 60 };
  const mayaBtn = { x: width / 2, y: 330, w: 260, h: 60 };

  if (isOver(sageBtn)) currentScreen = "natureAsk";
  else if (isOver(mayaBtn)) currentScreen = "partyAsk";
}

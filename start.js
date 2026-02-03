function drawStart() {
  background(10, 10, 25);

  drawCity();
  drawMoon();
  drawTrashWithFlowers();

  fill(255);
  textSize(42);
  text("UNREQUITED", width / 2, 140);

  textSize(18);
  text("Some love is found in unexpected places.", width / 2, 190);

  drawButton(width / 2, 380, 220, 60, "Begin");
}

function startMousePressed() {
  const btn = { x: width / 2, y: 380, w: 220, h: 60 };
  if (isOver(btn)) currentScreen = "choice";
}

/* ---------- VISUAL HELPERS ---------- */

function drawMoon() {
  fill(240);
  noStroke();
  ellipse(650, 100, 120, 120);
}

function drawCity() {
  fill(30);
  rect(0, 300, width, 200);

  fill(20);
  for (let i = 0; i < width; i += 80) {
    rect(i, 250, 60, random(80, 140));
  }
}

function drawTrashWithFlowers() {
  // trash can
  fill(60);
  rect(120, 320, 50, 70);

  // flowers
  fill(120, 200, 140);
  ellipse(110, 285, 12);
  ellipse(130, 280, 12);
  ellipse(120, 270, 12);
}

let currentScreen = "start";

// ---------- BUTTONS ----------
let startBtn = { x: 400, y: 300, w: 220, h: 60 };
let partyBtn = { x: 250, y: 300, w: 220, h: 60 };
let natureBtn = { x: 550, y: 300, w: 220, h: 60 };
let continueBtn = { x: 400, y: 350, w: 220, h: 60 };
let restartBtn = { x: 400, y: 380, w: 220, h: 60 };

// ---------- SETUP ----------
function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

// ---------- DRAW ----------
function draw() {
  background(20);

  if (currentScreen === "start") drawStart();
  else if (currentScreen === "choice") drawChoice();
  else if (currentScreen === "partyAsk") drawPartyAsk();
  else if (currentScreen === "natureAsk") drawNatureAsk();
  else if (currentScreen === "partyEnd") drawPartyEnd();
  else if (currentScreen === "natureEnd") drawNatureEnd();
}

// ---------- MOUSE ----------
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "choice") choiceMousePressed();
  else if (currentScreen === "partyAsk") partyAskMousePressed();
  else if (currentScreen === "natureAsk") natureAskMousePressed();
  else if (currentScreen === "partyEnd") endMousePressed();
  else if (currentScreen === "natureEnd") endMousePressed();
}

// ---------- SCREENS ----------
function drawStart() {
  fill(255);
  textSize(36);
  text("Welcome", width / 2, 180);
  drawButton(startBtn.x, startBtn.y, startBtn.w, startBtn.h, "Start");
}

function drawChoice() {
  fill(255);
  textSize(28);
  text("Choose your path", width / 2, 160);
  drawButton(partyBtn.x, partyBtn.y, partyBtn.w, partyBtn.h, "Party");
  drawButton(natureBtn.x, natureBtn.y, natureBtn.w, natureBtn.h, "Nature");
}

function drawPartyAsk() {
  fill(255);
  textSize(26);
  text("You go to a party.\nDo you stay late?", width / 2, 200);
  drawButton(
    continueBtn.x,
    continueBtn.y,
    continueBtn.w,
    continueBtn.h,
    "Continue",
  );
}

function drawNatureAsk() {
  fill(255);
  textSize(26);
  text("You go into nature.\nDo you keep walking?", width / 2, 200);
  drawButton(
    continueBtn.x,
    continueBtn.y,
    continueBtn.w,
    continueBtn.h,
    "Continue",
  );
}

function drawPartyEnd() {
  fill(255);
  textSize(26);
  text("You had a wild night.\nThe end.", width / 2, 220);
  drawButton(restartBtn.x, restartBtn.y, restartBtn.w, restartBtn.h, "Restart");
}

function drawNatureEnd() {
  fill(255);
  textSize(26);
  text("You found peace in nature.\nThe end.", width / 2, 220);
  drawButton(restartBtn.x, restartBtn.y, restartBtn.w, restartBtn.h, "Restart");
}

// ---------- CLICK HANDLERS ----------
function startMousePressed() {
  if (isOver(startBtn)) currentScreen = "choice";
}

function choiceMousePressed() {
  if (isOver(partyBtn)) currentScreen = "partyAsk";
  else if (isOver(natureBtn)) currentScreen = "natureAsk";
}

function partyAskMousePressed() {
  if (isOver(continueBtn)) currentScreen = "partyEnd";
}

function natureAskMousePressed() {
  if (isOver(continueBtn)) currentScreen = "natureEnd";
}

function endMousePressed() {
  if (isOver(restartBtn)) currentScreen = "start";
}

// ---------- UI HELPERS ----------
function drawButton(x, y, w, h, label) {
  fill(60);
  rect(x, y, w, h, 12);
  fill(255);
  textSize(18);
  text(label, x, y);
}

function isOver(btn) {
  return (
    mouseX > btn.x - btn.w / 2 &&
    mouseX < btn.x + btn.w / 2 &&
    mouseY > btn.y - btn.h / 2 &&
    mouseY < btn.y + btn.h / 2
  );
}

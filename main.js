//ゲームエリアの管理
const MainCanvas = document.getElementById("MainCanvas");
const MainContext = MainCanvas.getContext("2d");
const GameArea = new CanvasManager(new Vector2(1280, 720), MainCanvas);
const keyInput = new keyInputManager();
GameArea.refresh();

//回り続ける小山高専
let Components = [];
Components[0] = new CanvasComponents({
  ctx: MainContext,
  img: "./assets/Oyama_logo.png",
  position: new Vector2(GameArea.x / 2, GameArea.y / 4),
});
Components[0].update = function () {
  this.rotate += 10;
  this.position.x += 2;
  this.position.y += this.position.y;
};

function update() {
  // your code goes here
}

//ゲームループの定義・開始
const GameLoop = new GameLoopManager(() => {
  update();
  MainContext.clearRect(0, 0, GameArea.x, GameArea.y);
  for (let i = 0; i < Components.length; i++) {
    let target = Components[i];
    target.render();
    target.update();
  }
}, 30);
GameLoop.start();

//ゲームエリアの管理
const MainCanvas = document.getElementById("MainCanvas");
const MainContext = MainCanvas.getContext("2d");
const GameArea = new CanvasManager(new Vector2(1280, 720), MainCanvas);
GameArea.refresh();
const keyInput = new keyInputManager();

//回り続ける小山高専
let oyamaLogo = new CanvasComponents({
  ctx: MainContext,
  img: "./assets/Oyama_logo.png",
  position: new Vector2(GameArea.x / 2, GameArea.y / 2),
});
oyamaLogo.update = function () {
  if(keyInput.IsPressed("ArrowLeft")){
    this.position.x-=10;
  }
  if(keyInput.IsPressed("ArrowRight")){
    this.position.x+=10;
  }
  if(keyInput.IsPressed("ArrowUp")){
    this.position.y-=5;
  }
  if(keyInput.IsPressed("ArrowDown")){
    this.position.y+=5;
  }
};

function update() {
  // your code goes here
}

//ゲームループの定義・開始
const GameLoop = new GameLoopManager(() => {
  update();
  MainContext.clearRect(0, 0, GameArea.x, GameArea.y);
  oyamaLogo.render();
  oyamaLogo.update();
}, 30);
GameLoop.start();

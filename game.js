var score=0;
class Game {
  constructor() {
    this.init();
    this.start();
    this.map = new Map();
    this.block = new Block();
    this.BindEvent();
  }
  init() {
    this.dom = document.createElement("table");
    document.getElementById("app").appendChild(this.dom);

    for (let i = 0; i < 20; i++) {
      let tr = document.createElement("tr");
      this.dom.appendChild(tr);
      for (let j = 0; j < 12; j++) {
        let td = document.createElement("td");
        tr.appendChild(td);
      }
    }
  }
  start() {
    this.f = 0;
    score = 0;
    this.level = 0;
    this.info = 0;
    this.timer = setInterval(() => {
      this.f++;
      document.getElementById("round").innerHTML = "round:" + round;
      document.getElementById("score").innerHTML = "score:" + score;
      this.clearClass(this);
      this.block.render(this);
      //每间隔speed下落
      this.f % speed == 0 && this.block.down(this);
      this.map.render(this);
    }, 30);
  }
  setClass(row, col, classname) {
    this.dom.getElementsByTagName("tr")[row].getElementsByTagName("td")[
      col
    ].className = classname;
  }
  clearClass(game) {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 12; j++) {
        game.setClass(i, j, "");
      }
    }
  }
  //键盘监听
  BindEvent() {
    document.onkeyup = (event) => {
      if (event.key == "ArrowLeft") {
        this.block.left(this);
      } else if (event.key == "ArrowUp") {
        this.block.rotate(this);
      } else if (event.key == "ArrowRight") {
        this.block.right(this);
      } else if (event.key == "ArrowDown") {
        this.block.goDown(this);
      }
    };
  }
}

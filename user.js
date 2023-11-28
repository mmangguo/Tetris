var type = ["I", "L", "J", "O", "Z", "S", "T", "K"];
var type1 = ["I", "L", "O", "T"];
var type2 = ["I", "L", "J", "O", "Z", "S", "T"];
var type3 = ["I", "L", "J", "O", "Z", "S", "T", "K"];
var type1d = ["I2", "L2", "O2", "T2"];
var type2d = ["I2", "L2", "J2", "O2", "Z2", "S2", "T2"];
var type3d = ["I2", "L2", "J2", "O2", "Z2", "S2", "T2", "K2"];

var speed1 = 25;
var speed2 = 10;
var speed3 = 5;
var speed = 25;
var block_json = block_json0;

var round = 1;

class User {
  constructor() {
    this.isstart = 0;
    this.level = "easy";
    this.color = "light";
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
    this.rank=new Rank();
  }
  setting() {
    this.level = document.getElementById("level").value;
    this.color = document.getElementById("color").value;
    console.log(typeof document.getElementById("level"));
    console.log(typeof document.getElementById("level").value);
    console.log(typeof this.level);
    switch (this.level) {
      case "easy":
        type = type1;
        speed = speed1;
        if (this.color == "dark") {
          type = type1d;
        }
        break;
      case "medium":
        type = type2;
        speed = speed2;
        if (this.color == "dark") {
          type = type2d;
        }
        break;
      case "hard":
        type = type3;
        speed = speed3;
        if (this.color == "dark") {
          type = type3d;
        }
        break;
      default:
        alert("level error")
        break;
    }
    switch (this.color) {
      case "light":
        block_json = block_json1;
        break;
      case "dark":
        block_json = block_json2;
        break;
      default:
        alert("color error");
        break;
    }
    console.log("level=" + this.level);
    console.log("color=" + this.color);
  }
  startgame() {
    this.isstart = 1;
    let gameBoard=document.getElementById("app");
    gameBoard.innerHTML="";
    var game = new Game();
    console.log("isstart:" + this.isstart);
  }
  restart(game) {
    this.isstart = 1;
    round++;
    let gameBoard = document.getElementById("app");
    gameBoard.innerHTML = "";
    this.startgame();
  }
  endgame(game) {
    this.isstart = 0;
    console.log(game.map.code);
    console.log(game.map.code);
  }
}

class Block {
  constructor() {
    this.allType = type[~~(Math.random() * type.length)];
    console.log(this.allType);

    this.allDirection = block_json[this.allType].length;
    this.direction = ~~(Math.random() * this.allDirection);
    this.code = block_json[this.allType][this.direction];

    this.row = 0;
    this.col = 4;
  }
  //渲染
  render(game) {
    if (user.isstart) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (this.code[i][j] == 1) {
            game.setClass(this.row + i, this.col + j, this.allType);
          }
        }
      }
    }
  }

  down(game) {
    // console.log(this.check(this.row + 1, this.col));
    game.map.code[0].forEach((item) => {
      if (item !== 0) {
        clearInterval(game.timer);
        user.endgame(game);
        console.log("游戏结束了")
        alert("游戏结束了")
        user.rank.update();
        user.rank.render();
        console.log("得分："+score)
        score=0;
      }
    });
    if (this.check(game, this.row + 1, this.col)) {
      this.row++;
    } else {
      this.addDie(game);
      if (user.isstart) {
        game.block = new Block();
      }
      console.log(score);
      //判断消行
      this.remove(game);
    }
  }
  //碰撞检测
  check(game, row, col) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.code[i][j] != 0 && game.map.code[row + i][col + j] != 0) {
          return false;
        }
      }
    }
    return true;
  }

  left(game) {
    if (this.check(game, this.row, this.col - 1)) {
      this.col--;
    }
  }
  right(game) {
    if (this.check(game, this.row, this.col + 1)) {
      this.col++;
    }
  }
  //到底
  goDown(game) {
    while (this.check(game, this.row + 1, this.col)) {
      this.row++;
    }
  }
  //旋转
  rotate(game) {
    var oldDirection = this.direction;
    if (this.direction == this.allDirection - 1) {
      this.direction = 0;
    } else {
      this.direction++;
    }
    this.code = block_json[this.allType][this.direction];
    if (!this.check(game, this.row, this.col)) {
      this.direction = oldDirection;
      this.code = block_json[this.allType][this.direction];
    }
  }
  //落地方块
  addDie(game) {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.code[i][j] != 0) {
          game.map.code[this.row + i][this.col + j] = this.allType;
        }
      }
    }
    // console.log("addDie")
  }
  //消行 得分
  remove(game) {
    for (let i = 0; i < 20; i++) {
      if (!game.map.code[i].includes(0)) {
        game.map.code.splice(i, 1);
        game.map.code.unshift(new Array(12).fill(0));
        score++;
      }
    }
  }
}

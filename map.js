//地图
class Map {
  constructor() {
    this.code = (() => {
      var arr = [];
      for (let i = 0; i < 20; i++) {
        arr.push([]);
        for (let j = 0; j < 12; j++) {
          arr[i].push(0);
        }
      }
      arr.push([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
      return arr;
    })();
  }
  render(game) {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 12; j++) {
        if (this.code[i][j] != 0) {
          game.setClass(i, j, this.code[i][j]);
        }
      }
    }
  }
  newmap(game) {
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 12; j++) {
        this.code[i][j] = 0;
      }
    }
    game.map.render();
  }
 
}

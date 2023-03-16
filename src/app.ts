import Grid from "./grid/grid/grid";
import BinaryTree from "./algorithms/binaryTree";

class App {
  grid: Grid;

  constructor() {
    this.grid = new Grid(9, 9);
    const bt = new BinaryTree(this.grid);

    console.log(this.grid.toString());
  }

  render() {
    return `
        ${this.grid.toString()}
    `;
  }

}

export default App;
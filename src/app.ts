import Grid from "./grid/grid/grid";
import BinaryTree from "./algorithms/binaryTree";

class App {
  element: Element;
  grid: Grid;

  constructor() {
    this.grid = new Grid(9, 9);
    const bt = new BinaryTree(this.grid);

    console.log(this.grid.toString());
    this.grid.updateStyle();

    this.render();
  }

  render() {
    this.element = this.grid.element;
  }

}

export default App;
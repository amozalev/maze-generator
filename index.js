import Grid from "./grid/grid.js";
import BinaryTree from "./algorithms/binaryTree.js";

const gridObj = new Grid(9, 9);
const bt = new BinaryTree(gridObj);

console.log(gridObj.toString());

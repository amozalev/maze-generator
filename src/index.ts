import Grid from "./grid/grid";
import BinaryTree from "./algorithms/binaryTree";

const gridObj = new Grid(9, 9);
const bt = new BinaryTree(gridObj);

console.log(gridObj.toString());

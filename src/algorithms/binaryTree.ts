import Grid from "../grid/grid/grid";

class BinaryTree {
  constructor(grid: Grid) {
    for (const row of grid) {
      for (const cell of row) {
        const neighbors = [
          ...(cell.north ? [cell.north] : []),
          ...(cell.east ? [cell.east] : [])
        ];

        if (neighbors.length) {
          const index = Math.floor(Math.random() * neighbors.length);
          const neighbor = neighbors[index];
          cell.link(neighbor);
        }
      }
    }
  }
}

export default BinaryTree;
import Cell from "../grid/cell.js";

class BinaryTree {
    constructor(grid) {
        for (const row of grid.grid) {
            for (const cell of row) {
                const neighbors = [];

                if (cell.north) {
                    neighbors.push(cell.north);
                }
                if (cell.east) {
                    neighbors.push(cell.east);
                }

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
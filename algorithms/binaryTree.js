import Cell from "../grid/cell.js";

class BinaryTree {
    constructor(grid) {
        for (let i = 0; i < grid.rows; i++) {
            for (let j = 0; j < grid.columns; j++) {
                const neighbors = [];

                if (grid.grid[i][j].north) {
                    neighbors.push(grid.grid[i][j].north);
                }
                if (grid.grid[i][j].east) {
                    neighbors.push(grid.grid[i][j].east);
                }

                if (neighbors.length) {
                    const index = Math.floor(Math.random() * neighbors.length);
                    const neighbor = neighbors[index];
                    grid.grid[i][j].link(neighbor);
                }
            }
        }
    }
}

export default BinaryTree;
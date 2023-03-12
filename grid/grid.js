import Cell from "./cell.js";

class Grid {
    grid = [];

    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.prepareGrid();
        this.configureCells();
    }

    prepareGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.grid[i][j] = new Cell(i, j);
            }
        }
    }

    configureCells() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                const [row, col] = [this.grid[i][j].row, this.grid[i][j].column];

                this.grid[i][j].north = row - 1 >= 0 ? this.grid[row - 1][col] : null;
                this.grid[i][j].south = row + 1 < this.rows ? this.grid[row + 1][col] : null;
                this.grid[i][j].west = col - 1 >= 0 ? this.grid[row][col - 1] : null;
                this.grid[i][j].east = col + 1 < this.columns ? this.grid[row][col + 1] : null;
            }
        }
    }

    toString() {
        let output = [`+${'---+'.repeat(this.columns)}\n`];

        for (let i = 0; i < this.rows; i++) {
            let top = ['|'];
            let bottom = ['+'];

            for (let j = 0; j < this.columns; j++) {
                const cell = this.grid[i][j];

                const body = '   ';
                const eastBoundary = cell.isLinked(cell.east) ? ' ' : '|';
                top.push(`${body}${eastBoundary}`);
                const southBoundary = cell.isLinked(cell.south) ? '   ' : '---';
                const corner = '+';
                bottom.push(`${southBoundary}${corner}`);
            }
            output.push(`${top.join('')}\n`);
            output.push(`${bottom.join('')}\n`);
        }

        return output.join('');
    }
}

export default Grid;
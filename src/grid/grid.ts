import Cell from "./cell";

class Grid {
  rows: number;
  columns: number;
  grid: Cell[][] = [];

  constructor(rows: number, columns: number) {
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
        const cell = this.grid[i][j];
        const [row, col] = [cell.row, cell.column];

        cell.north = row - 1 >= 0 ? this.grid[row - 1][col] : null;
        cell.south = row + 1 < this.rows ? this.grid[row + 1][col] : null;
        cell.west = col - 1 >= 0 ? this.grid[row][col - 1] : null;
        cell.east = col + 1 < this.columns ? this.grid[row][col + 1] : null;
      }
    }
  }

  toString() {
    let output = [`+${'---+'.repeat(this.columns)}\n`];

    for (const row of this.grid) {
      let top = ['|'];
      let bottom = ['+'];

      for (const cell of row) {
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
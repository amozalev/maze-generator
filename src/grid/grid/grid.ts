import Cell from "../cell/cell";
import './grid-style.css';

class Grid {
  element: any;
  rows: number;
  columns: number;
  grid: Cell[][] = [];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.prepareGrid();
    this.configureCells();

    this.render();
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

  [Symbol.iterator]() {
    let index = -1;
    const grid = this.grid;
    const rows = this.rows;

    return {
      next() {
        index++;

        return {
          value: grid[index],
          done: index >= rows
        }
      }
    }
  }

  // getRow(row: Cell[]) {
  //   return `
  //     <div class="row">
  //       ${row.map(cell => cell.element.outerHTML).join('')}
  //     </div>
  //   `;
  // }
  //
  // getRows() {
  //   return this.grid.map(row => this.getRow(row)).join('');
  // }

  get template() {
    return `<div class="grid" style="--columns:${this.columns};--rows:${this.rows};"> </div>`;
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template;

    this.element = wrapper.firstElementChild;

    for (const row of this.grid) {
      for (const cell of row) {
        this.element.append(cell.element);
      }
    }
  }

}

export default Grid;
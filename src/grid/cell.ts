class Cell {
  row: number;
  column: number;
  links: { [key: string]: boolean } = {};
  neighbors = [];
  north: Cell | null;
  south: Cell | null;
  west: Cell | null;
  east: Cell | null;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  link(cell: Cell) {
    if (!cell) {
      return;
    }

    const key = `${cell.row}${cell.column}`;

    if (cell && !this.links[key]) {
      this.links[key] = true;
      cell.link(this);
    }
  }

  unlink(cell: Cell) {
    const key = `${cell.row}${cell.column}`;
    const thisKey = `${this.row}${this.column}`;
    delete this.links[key];
    delete cell.links[thisKey];
  }

  getLinks() {
    return Object.keys(this.links);
  }

  isLinked(cell: Cell | null): boolean {
    if (!cell) {
      return false;
    }
    const key = `${cell.row}${cell.column}`;
    return !!this.links[key];
  }

  getNeighbors(): Cell[] {
    const arr: Cell[] = [];
    if (this.north) {
      arr.push(this.north);
    }
    if (this.south) {
      arr.push(this.south);
    }
    if (this.west) {
      arr.push(this.west);
    }
    if (this.east) {
      arr.push(this.east);
    }

    return arr;
  }
}

export default Cell;
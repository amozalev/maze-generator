class Cell {
    row;
    column;
    links = {};
    neighbors = [];
    north;
    south;
    west;
    east;

    constructor(row, column) {
        this.row = row;
        this.column = column;
    }

    link(cell) {
        if (!cell) {
            return;
        }
        // console.log('==cell', cell.row, cell.column, cell);
        const key = `${cell.row}${cell.column}`;

        if (cell && !this.links[key]) {
            this.links[key] = true;
            cell.link(this);
        }
    }

    unlink(cell) {
        const key = `${cell.row}${cell.column}`;
        delete this.links[key];
        delete cell.links[this];
    }

    getLinks() {
        return Object.keys(this.links);
    }

    isLinked(cell) {
        if (!cell) {
            return false;
        }
        const key = `${cell.row}${cell.column}`;
        return !!this.links[key];
    }

    getNeighbors() {
        const arr = [];
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
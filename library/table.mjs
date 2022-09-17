import { createTh, createTd } from "./func.mjs";

export default class Table {
  constructor(table) {
    this.columns = table.columns;
    this.data = table.data;
    this.classTable = `w-100 table table-bordered`;
  }

  createTabel() {
    const table = `<table class="${this.classTable}">
      <thead class="table-primary">
          <tr>
              ${createTh(this.columns)}
          </tr>
      </thead>
      <tbody>
              ${createTd(this.data)}
      </tbody>
      </table>`;
    return table;
  }

  render(target) {
    target.innerHTML = this.createTabel();
  }
}

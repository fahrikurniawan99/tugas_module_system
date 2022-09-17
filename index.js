import Table from "./library/table.mjs";
const table = new Table({
  columns: ["Nama", "Email"],
  data: [
    ["Mike", "mike@gmail.com"],
    ["Fahri", "fahri@gmail.com"],
    ["Abdul", "Abdul@gmail.com"],
  ],
});

table.render(document.getElementById("app"));
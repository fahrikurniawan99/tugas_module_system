function createTh(columns) {
  let th = "";
  columns.forEach((e) => (th += `<th>${e}</th>`));
  return th;
}

function createTd(data) {
  let td = "";
  data.forEach((e) => (td += `<td>${e[0]}</td><td>${e[1]}</td></tr>`));
  return td;
}

export { createTh, createTd };

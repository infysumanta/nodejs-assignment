const parseCsvText = (text = "") => {
  const rows = text.split("\n");

  if (rows[rows.length - 1] === "") {
    rows.pop();
  }

  if (rows.length <= 1) {
    return;
  }

  const titles = rows.shift().split(";");
  const objects = rows.map((row) => {
    const values = row.split(";");

    return values.reduce((acc, item, index) => {
      acc[titles[index]] = item;

      return acc;
    }, {});
  });

  return objects;
};

export { parseCsvText };

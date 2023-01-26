import React from "react";

import booksData from "../data/books.csv";
import magazinesData from "../data/magazines.csv";
import { parseCsvText } from "./utils/csvHelper";
import { mergeData } from "./utils/mergeData";
import Table from "./components/Table";

const App = () => {
  const books = parseCsvText(booksData);
  const magazines = parseCsvText(magazinesData);

  const booksAndMagazines = mergeData(books, magazines);

  return (
    <main>
      <h1 className="app-title">Books and Magazines</h1>

      <Table contents={booksAndMagazines} sortBy={"title"} />
    </main>
  );
};

export default App;

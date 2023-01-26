import authorsData from "../../data/authors.csv";
import { parseCsvText } from "./csvHelper";

const authors = parseCsvText(authorsData);

const injectAuthorsName = (obj) => {
  const newObj = {
    ...obj,
  };
  newObj.authors = obj.authors.split(",").map((email) => {
    const author = authors.find((person) => person.email === email);

    return {
      email,
      name: `${author.firstname} ${author.lastname}`,
    };
  });

  return newObj;
};

const getAllFields = function () {
  const dataArrays = [...arguments];
  const fields = dataArrays.map((arr) => {
    return arr.reduce((acc, item) => {
      return [...acc, ...Object.keys(item)];
    }, []);
  });

  return fields.flat().filter((item, i, arr) => arr.indexOf(item) === i);
};

const mergeData = function () {
  const dataArrays = [...arguments];
  const allFields = getAllFields(...arguments);

  console.log(dataArrays, allFields);

  const resultArray = dataArrays.flat().map((obj) => {
    allFields.forEach((field) => {
      if (!obj[field]) {
        obj[field] = "";
      }
    });

    return injectAuthorsName(obj);
  });

  return resultArray;
};

export { getAllFields, mergeData };

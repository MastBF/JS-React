function groupBy(array, key) {
    
  return array.reduce((result, obj) => {
    const keyValue = obj[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(obj);

    return result;
  }, {});
}

const arrayOfObjects = [
    {val:1},
    {val:1},
    {val:2},
];

const groupedByCategory = groupBy(arrayOfObjects, "val");
console.log(groupedByCategory);

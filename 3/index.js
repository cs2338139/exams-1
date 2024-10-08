let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1];

function getUniqueNumber(items) {
  const uniqueItems = new Set(items);

  return Array.from(uniqueItems);
}

let uniqueItems = getUniqueNumber(items);
console.log(uniqueItems);

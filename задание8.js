let fruits = new Map([
    ["orange", "juicy"],
    ["lime", "sour"],
    ["apple", "sweet"]
]);
fruits.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});
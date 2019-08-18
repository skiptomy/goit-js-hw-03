"use-strict";

let findBestEmployee = employees => {
  let names = Object.keys(employees);

  let maxNumber = 0;
  let maxName;

  for (const name of names) {
    if (employees[name] > maxNumber) {
      maxNumber = employees[name];
      maxName = name;
    }
  }
  return maxName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.push("arif"); // [ 'Rahim', 'Karim', 'Rafiq', 'Jabbar', 'arif' ]
// console.log(arrName);

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.pop("Jabbar"); // [ 'Rahim', 'Karim', 'Rafiq' ]
// console.log(arrName);

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
for (var i = 0; i < arrName.length; i++) {
  // console.log(arrName[i]); //Rahim Karim Rafiq Jabbar
}

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.shift(); //[ 'Karim', 'Rafiq', 'Jabbar' ]
//  console.log(arrName);

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.unshift("arif"); //[ 'arif', 'Rahim', 'Karim', 'Rafiq', 'Jabbar' ]
//  console.log(arrName);

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.indexOf("Rafiq"); // 2
//  console.log( arrName.indexOf('Rafiq'));

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
arrName.splice(1, 2); //[ 'Rahim', 'Jabbar' ]
arrName.splice(1, 2, "arif"); //[ 'Rahim', 'Karim', 'arif' ]
// console.log(arrName)

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar"];
var result = arrName.slice(1, 3); // [ 'Karim', 'Rafiq' ]
// console.log(result)

var arrName = ["Rahim", "Karim", "Rafiq", "Jabbar", "jobair"];
arrName[3] = "Arif"; // [ 'Rahim', 'Karim', 'Rafiq', 'Arif', 'jobair' ]
// console.log(arrName);

const numbers = [3, 5, 8, 58, 38, 83, 70];

const maxNumber = numbers.reduce((prev, curr) => Math.max(prev, curr)); // 83
const minNumber = numbers.reduce((prev, curr) => Math.min(prev, curr)); // 3
const accumulate = numbers.reduce((prev, curr) => prev + curr, 100); // 365

const people = [
  {
    name: "Arif",
    age: 30,
  },
  {
    name: "shahid",
    age: 50,
  },
  {
    name: "jobair",
    age: 25,
  },
  {
    name: "Arif",
    age: 50,
  },
];

const totalAge = people.reduce((prev, curr) => prev + curr.age, 0);
const avgAge = totalAge / people.length; // 37.5

const totalArif = people.filter((p) => p.name === "Arif"); //[ { name: 'Arif', age: 30 }, { name: 'Arif', age: 45 } ]

const ageLessOrEqualThirty = people.filter((p) => p.age <= 30); // [ { name: 'Arif', age: 30 }, { name: 'jobair', age: 25 } ]

const oldAge = people.reduce((prev, curr) => Math.max(prev, curr.age), 0); // 50

const oldMen = people.filter((p) => p.age === oldAge); // [ { name: 'shahid', age: 50 }, { name: 'Arif', age: 50 } ]


const peoples = [
    {
      name: "Arif",
      age: 30,
    },
    {
      name: "shahid",
      age: 50,
    },
    {
      name: "jobair",
      age: 25,
    },
    {
      name: "jobair",
      age: 20,
    },
    {
      name: "jobair",
      age: 30,
    },
    {
      name: "Arif",
      age: 50,
    },
  ];
const totalSamePeoples = peoples.reduce((prev, curr) => {
  console.log("🚀 ~ file: array.js:103 ~ totalSamePeoples ~ prev:", prev)
  console.log("🚀 ~ file: array.js:103 ~ totalSamePeoples ~ curr:", curr.name)
  if (prev[curr.name]) {
      prev[curr.name]++;
    } else {
    prev[curr.name] = 1;
  }
  return prev
}, {});
console.log("🚀 totalSamePeoples", totalSamePeoples); // { Arif: 2, shahid: 1, jobair: 3 }

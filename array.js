var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.push('arif') // in the array, add new element in last
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.pop('Jabbar') // remove last element from the array
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
for(var i = 0; i < arrName.length; i++) {
    // console.log(arrName[i]);
 }

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.shift(); //removes the first item of the array.
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.unshift('arif'); // adds new elements to the beginning of an array.
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.indexOf('Rafiq'); // check element position  of the array
//  console.log( arrName.indexOf('Rafiq'));

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.splice(2, 0, 'arif'); //adds and/or removes array elements.
// console.log(arrName)

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var newarrName = arrName.splice(1) //remove first element from the array
// console.log(newarrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var newarrName = arrName.slice(0,2)
// console.log(newarrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar' , 'jobair'];
arrName[3]='Arif' // change element of the array
console.log(arrName);
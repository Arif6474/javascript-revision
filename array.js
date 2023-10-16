var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.push('arif') // [ 'Rahim', 'Karim', 'Rafiq', 'Jabbar', 'arif' ]
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.pop('Jabbar') // [ 'Rahim', 'Karim', 'Rafiq' ]
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
for(var i = 0; i < arrName.length; i++) {
    // console.log(arrName[i]); //Rahim Karim Rafiq Jabbar
 }

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.shift(); //[ 'Karim', 'Rafiq', 'Jabbar' ]
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.unshift('arif'); //[ 'arif', 'Rahim', 'Karim', 'Rafiq', 'Jabbar' ]
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.indexOf('Rafiq'); // 2
//  console.log( arrName.indexOf('Rafiq'));

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.splice(1,2); //[ 'Rahim', 'Jabbar' ]
arrName.splice(1,2, 'arif'); //[ 'Rahim', 'Karim', 'arif' ]
// console.log(arrName)



var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var result = arrName.slice(1,3); // [ 'Karim', 'Rafiq' ]
// console.log(result)

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar' , 'jobair'];
arrName[3]='Arif' // [ 'Rahim', 'Karim', 'Rafiq', 'Arif', 'jobair' ]
console.log(arrName);
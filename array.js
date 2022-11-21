var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.push('arif')
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName.pop('karim')
// console.log(arrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
for(var i = 0; i < arrName.length; i++) {
    // console.log('Name: ' + arrName[i]);
 }

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.shift();
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.unshift('arif');
//  console.log(arrName);

 var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
 arrName.indexOf('Rafiq');
//  console.log( arrName.indexOf('Rafiq'));

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
// console.log(arrName.splice(-3));

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var newarrName = arrName.splice(1)
console.log(newarrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
var newarrName = arrName.slice(0,2)
// console.log(newarrName);

var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
arrName[3]='Arif'
// console.log(arrName);
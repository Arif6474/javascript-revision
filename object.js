var rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
 }
 rahim.id = '34' // to add item in the object
 rahim.age = 25 // to change existing item in the object
 rahim.welcomeMsg = function() {
    console.log('Hello There');
 }
//  rahim.welcomeMsg()
//  console.log(rahim);

for(item in rahim) {
    console.log(item)
 }
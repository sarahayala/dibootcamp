let numbers = [1,2,3,4,5]
let names = ['nadav', 'yaffa', 'israel']

for (let index = 0; index  < 3; index++) {
console.log('hello');    
}

for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
    
}
let counter = 0
while (counter < names.length) {
    counter++
    console.log(counter);
}


do {
    counter++
  console.log(counter);

}while (counter < names.length) 

if (counter % 2 == 0) {
    
}
for (let i = 0; i <= 20; i++) {
    console.log(i);
    if (i % 2 == 0) {
        console.log(i + 'is even');
    } else {
       console.log('i' + 'is odd'); 
    }
}
let namess= ["john", "sarah", 23, "Rudolf",34]

for (let index = 0; index < namess.length; index++) {
if (typeof namess[index]=='string') {
   let nameitem = namess[index] 
   if (!(nameitem[0]=== nameitem.toUpperCase
    )) {
    
   }
}    
}



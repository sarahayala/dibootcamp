let nadav = 'nadav';
console.log(nadav);

let test = 5
 let shoshe = 5<4

 let yaffa = [1,2,3,[0,9,8],{shoshe:4}]
 let sarah = null
 let nadavcar= {
    model: 'ford focus',
    year: 1222,
    color: 'gold'
 }
 console.log(nadav,test,shoshe)
 let yossi = [1,2,3]
 for (const num of yaffa) {
    console.log(num*10);
 }
  
 let colors = ['red','yallow',];
for(const color of colors){
    console.log(`${color} is my#${colors.indexOf(color)}favorit color`);
}
for (let i = 0; i < colors.length; i++) {
    console.log(`${colors[i]}`);
    
}
/////////////////////////
function sarah1(num1, nam2) {
    return num1/nam2
    
}
console.log(sarah1(20,8));
let noy= document.getElementById('noy')

console.log(noy)
noy. textContent = 30

let title = document.getElementById('title')
title.textContent = 'thing'
title.style.color = 'red'
let body = document.getElementsByTagName('body')[0]
console.log(body);
body.style.backgroundColor = 'pink'

let things = document.getElementsByClassName('pTag')
console.log(things);
things[0].textContent = 'thing1'

for (const thing of things) {
thing.style.color = 'blue'    
}
    
let q = document.querySelector('#title')
let h2 = document.createElement('h2')
h2.textContent = 'will sarah notice?'

body.appendChild(h2)
body.removeChild(things[1])//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

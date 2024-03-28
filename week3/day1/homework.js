

// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(0,1)
// people[2]= 'jason'
// people.push('sarah')
// const Mary =p9eople.indexOf('Mary');
// let people2= people.slice(1,-1)
// const foo =people.indexOf('foo');
// let last= people[3]
// console.log(last);
let title = document.getElementById('title')
let titlebyclass = document.
getElementsByClassName('headers')[0];
let titlebytag = document.
getElementsByTagName('h1')[0];
// let titlebyselector = document.querySelector('')
// console.log(document.getElementsByTagName('body')[0].innerHTML);

console.log(titlebytag);
 let body = document.getElementsByTagName
 ('body')[0]
 console.log(body.innerHTML);
let p = document.createElement ('p')
p.textContent = 'בוקר טוב עולם, מה שלום כולם!!!'
p.style.backgroundColor='#808080'
p.style.width = 'fit-content'
p.style.padding = '16px'
body.appendChild(p)
let div = document.createElement('div')
div.innerHTML = '<h3 id="test">thing</h3> <h4 class="headers">thing2</4>'
div.classList.add('thing', 'fish')
div.classList.remove('fish')
div.classList.replace('thing', 'sarah')
body.appendChild(div)

let title1 = document.getElementById('title')
let title2 = document.querySelector('#title')
let title3 = document.getElementsByClassName('titles')[0]
let title4 = document.getElementsByClassName('h1')[0]

title1.textContent = 'hello world'

let button = document.createElement('button')
button.textContent = 'clik here'

let body = document.getElementsByTagName('body')[0]
button.style.backgroundColor = 'black'
button.style.color = 'white'
button.style.padding = '8px'
body.appendChild(button)

button.addEventListener('click', ()=>{
    setTimeout(()=>{
    console.log('hello world');
    },3000)
    let counter = 0
    let intervalName = setInterval (()=>{
        if (counter == 5){
            clearInterval(intervalName)


        }
        console.log(counter);
        counter++
    }, 500)
})
// ------------------------------------------------
let div = document.getElementById('container')
console.log(container);
let li = document.getElementsByTagName('li')[1]
console.log(li);
li.textContent = 'richard'

let li1 = document.getElementsByTagName('li')[3]
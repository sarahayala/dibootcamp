// x.name()
let numbers=[45,40,87,54,97]
let doulNumbers = numbers.map((num, index)=>{
    return num * 2
})
console.log(doulNumbers);

let arr = [1,1,1,1,1,1]
letnumsTimeIndex = arr.map((num, index)=>{
    return num * index
})
// console.log(letnumsTimeIndex);
let names =['nadav', 'oday', 'shosh', 'sarah', 'yaffa']
let correctname = names.map((name)=>{
    return name[0].toUpperCase()+ name.slice(1)
})
// console.log(correctname);

let numbers2=[45,40,87,54,97,34]
let biggerThen40 = numbers2.filter((num)=>{
    return num > 40
})
// console.log(biggerThen40);

let names1 =['nadav', 'oday', 'shosh', 'sarah', 'yaffa']
let notstarts = names1.filter((name)=>{
    return name[0] == 's'

})
// console.log(notstarts);

let numbers3=[45,40,87,54,97,34]
let reduce= numbers3.reduce((acc, num)=>{
    return acc +num
})
// console.log(reduce);

let bills = [45,76,120,154,200]
let account = 1000 
let accountafter = bills.reduce((acc,bill)=>{
return acc-bill
},account)
// console.log(accountafter);


let a,b,c;
[a,b,c]=[10,15,20]
// console.log(a)

let colors = ['red', 'blue']
let nowcolors = ['pink', 'purple', 'orange', ...colors]
// console.log(nowcolors);

// let  [pink, purple, ...othercolors]= nowcolors
// console.log(othercolors);
let nowcolors2 = nowcolors
let nowcolors3 = [...nowcolors]
nowcolors.push('green')
console.log(nowcolors2);
console.log(nowcolors3);


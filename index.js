// 1
let names = 'ismet'
console.log(names);

//2
let fruits = ['apple', 'lemon','watermelon', 'kiwi' ]
console.log(fruits[0]);

//3
let person = {
    name: 'Kenan',
    age: '25',
    job: 'Developer'

}
console.log(person.job);

//4
function sqr(a) {
    return (a**2)
    
    
}
console.log(sqr(5))

//5
for (let i = 0; i < 11; i++) {

    console.log(i);
    
}
//6
function evenodd(a) {

    if (a % 2 == 0) {
        console.log('is even');
        

        
    }


    else {
        console.log('is odd');
        
    }

    
}
console.log(evenodd());

//7
let arr = ['Honda', 'Toyota']
let edited = arr.push('Hyundai')
console.log(edited);

//8
const vegetables = 'tomato'

// const deyisilmiyen valuedi error verir !!

//9
function sum(a,b) {
    return a + b
    
}
console.log(sum(10,6));

//10

const names2 = ['Vafa', 'Habib', 'Dunya'] 
let A = names2.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
    
})

//11
let workers = {
    name: 'Elmir',
    name2: 'Kenan'
}
function Hello(c) {
   return this.name
}
console.log(workers.Hello);

//12

const colors = ['red', 'blue', 'green']
console.log(colors.shift());

//13
let template = 'Vaqif'
let log = `Hello ${template}`
console.log(log);

//????

//14
console.log(colors.length);

//15
let Ismet = 12;
console.log(Ismet);
Ismet = 13;

//16
let randomarr = [1,2,3,4,5,6,7,8,9,13,15,12,15,17,18]
let even = randomarr.filter(function(item, index, arr){

    if (item % 2 == 0) {

        console.log(`${item} is even`);
        
        
    }
});

console.log(even);

//17
let randomarr2 = [1,3,5,7,9,1,2,3,5,7,9];
let resault = randomarr2.reduce((sum, current) => sum + current, 0);
console.log(resault);

//18
const day = 'Monday'

let message;

switch (day) {
        case 'Monday':
        message = '1 ci gun'
        break;

        case 'Tuesday':
        message = '2 ci gun'
        break;

        case 'Wednesday':
        message = '3 ci gun'
        break;

        case 'Thursday':
        message = '4 ci gun'
        break;

        case 'Friday':
        message = '5 ci gun'
        break;

        case 'Saturday':
        message = '6 ci gun'
        break;

        case 'Sunday':
        message = '7 ci gun'
        break;


        default:
        message = 'bele bir gun yoxdur'
        break;
}
console.log(message);


//19

let e = 0;
while (e < 11) {
    console.log(e);
    e++;
        
}

//20
let high = [1,2,3,4,5]
console.log(Math.max(...high));

//21

let mainuser = {
    firstname: 'Ismet',
    lastname: 'Murad'
};
console.log(mainuser.firstname +  mainuser.lastname);

//22
let double = [1,3,5,7,9];

//23
let car = {
    carname: 'Honda'
}
console.log(car.carname + 'Started');

//24
let find = [20,30,40,50,58]
let Greather50 = find.find(num => num > 50)
console.log(Greather50)

//25
let spread1 = [1,2,3];
let spread2 = [4,5,6];
let merged = [...spread1, ...spread2]

console.log(merged);

//26
function reversestring(str) {
    let splitString = str.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join(""); 
    return joinArray;
}
console.log(reversestring(''));

//27
function length(t) {

    
    return t.length

    

}
console.log(length('hello'));

//28
let element1 = [1,2,3,4,5,6,7,8]
let firstElement = [];


//29
function Objtoarr(obj) {
    return Object.entries(obj);
    
}

let exampleObj = {
    Name: 'Ismet',
    Surname: 'Murad'
};
let finish = Objtoarr(exampleObj)
console.log(finish);






//31
function merge(obj1, obj2) {
    return {...obj1, ...obj2}
    
}

let object1 = {
    value: 'Vaqif'
}

let object2 = {
    value2: 'Gulmemedov'
}
let obj23 = merge(object1, object2)
console.log(obj23);


// let fruit = ["mango","apple","orange","hello"]
// let fruit2 = ["mango","apple","orange","hello"]
// const myArr = [[1,2],[3,4],[5,6]];
// // let size =  fruit.length
// // console.log(size)

// // document.getElementById("demo").innerHTML = fruit

// // let str =  fruit.toString()
// // console.log(str)
// // document.getElementById("demo").innerHTML = str

// // let at = fruit.at(2)
// // console.log(at)

// // let join = fruit.join("/")
// // console.log(join)

// // let arr = fruit.pop()
// // console.log(arr)

// let myfruit = fruit.concat(fruit2)

// class Person {
//     constructor(first, last, age, eye) {
//         this.firstName = first;
//         this.lastName = last;
//         this.age = age;
//         this.eyeColor = eye;
//     }
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// document.getElementById("demo").innerHTML =
//   "My father is " + myFather.age + ". My mother is " + myMother.age;

const Person2 = {
    name: "John1",
    age: 30,
    city: "New York",
}

const Person = {
    name: "John21",
    age: 30,
    city: "New York",
}

let obj = Object.assign(Person2,Person)

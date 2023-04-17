// // var  user={
// //     name:"ahmad",
// //     age:23
// // }
// // function duplicate(user){
// //      var dup={}
// //     dup.name=user.name;
// //     dup.age=user.age;
// // return dup;
// // }
// // var user2=duplicate(user);
// // user.name='Nimra'
// // console.log(user2.name);
// // console.log(user.name);

// // map function

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map((num)=>{
//     return num + 10;
// })
// console.log(newArr);

// // find function

// const ages = [3, 10, 18, 20];

// const newArrage = ages.find((age)=>{
//     return age>10?true:false;
// })
//  console.log(newArrage);

// //sort function

// const ages_s = [32, 1, 11, 20];

// const sorted_Arry = ages_s.sort();
//  console.log(sorted_Arry);

//  //reduce function

//  const r = [1, 2, 3, 4];
// const reduced_Arr = r.map((total,num)=>{

//     return total+num;
// })
// console.log(reduced_Arr);

///assignment questions

//question 1:;

const person = [
  { age: 50 },
  { age: 40 },
  { age: 20 },
  { age: 10 },
  { age: 11 },
  { age: 12 },
  { age: 15 },
  { age: 16 },
  { age: 17 },
  { age: 19 },
];

const myUsers = [
  {
    fname: "nazia spider",
    lname: "ocean",
    age: 10,
    gender: "M",
    lastOrderDate: "2019-06-28",
    totalOrders: 20,
  },
  {
    fname: "ahmad",
    lname: "ocean",
    age: 20,
    gender: "M",
    lastOrderDate: "2019-07-28",
    totalOrders: 10,
  },
  {
    fname: "abdullah",
    lname: "ocean",
    age: 30,
    gender: "M",
    lastOrderDate: "2019-08-28",
    totalOrders: 24,
  },
  {
    fname: "janbaz",
    lname: "ocean",
    age: 40,
    gender: "M",
    lastOrderDate: "2019-09-28",
    totalOrders: 55,
  },
  {
    fname: "shadman",
    lname: "ocean",
    age: 50,
    gender: "M",
    lastOrderDate: "2019-10-28",
    totalOrders: 60,
  },
  {
    fname: "waseem",
    lname: "ocean",
    age: 60,
    gender: "M",
    lastOrderDate: "2019-06-28",
    totalOrders: 77,
  },
  {
    fname: "shadab",
    lname: "ocean",
    age: 70,
    gender: "M",
    lastOrderDate: "2019-02-28",
    totalOrders: 88,
  },
  {
    fname: "akhtar",
    lname: "ocean",
    age: 80,
    gender: "M",
    lastOrderDate:"2019-01-28",
    totalOrders: 88,
  },
  {
    fname: "humaiyo",
    lname: "ocean",
    age: 90,
    gender: "M",
    lastOrderDate: "2019-06-28",
    totalOrders: 40,
  },
  {
    fname: "erin",
    lname: "ocean",
    age: 99,
    gender: "M",
    lastOrderDate: "2019-06-28",
    totalOrders: 20,
  },
];

// const usersByLikes = myUsers.map((item) => {
//   // console.log('tota.age==>'+total.age);

//   // console.log('item.age==>'+item.age);

//   item.age = item.age + 1;
//   return item;
// });

// console.log(usersByLikes);

///Question 2
let totalOrders = 80;

let filteredArrayMainFun = (arr, totalOrders) => {
  let filtercallback = (element) => {
    let ans = element.totalOrders > totalOrders ? true : false;


    return ans;
  };

  return arr.filter(filtercallback);
};

let filterarr = filteredArrayMainFun(myUsers, totalOrders);

console.log(filterarr);
///QUESTION 3




let totalOrderss = 80;

let findArrayMainFunn = (arr, totalOrders) => {
  let filtercallback = (element) => {
    let ans = element.totalOrders > totalOrders ? true : false;


    return ans;
  };

  return arr.find(filtercallback);
};

let findarrr = findArrayMainFunn(myUsers, totalOrders);
console.log("find arry")
console.log(findarrr);


//QUESTION 3

const usersByLikes = myUsers.map((item) => {
      // console.log('tota.age==>'+total.age);
    
      // console.log('item.age==>'+item.age);
    
      
      return item;
    });
    console.log("all users");
    console.log(usersByLikes);

    //QUESTOIN 5 SORT
    console.log("asending order sort");
    console.log(myUsers.sort((first, second) => {
        //let firstDate = new Date(first.lastOrderDate),
        //secondDate = new Date(second.lastOrderDate);
       // return firstDate - secondDate;
       return Date.parse(first.lastOrderDate) - Date.parse(second.lastOrderDate);
    }));


    
//Q6: sort array in descending order of totalorders
console.log("desending order sort");
console.log(myUsers.sort((first, second) => {
    return second.totalOrder - first.totalOrder;
}));
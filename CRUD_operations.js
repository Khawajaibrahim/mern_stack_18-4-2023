const myUsers = [
    {
        id:1,
      fname: "nazia spider",
      lname: "ocean",
      age: 10,
      gender: "M",
      lastOrderDate: "2019-06-28",
      totalOrders: 20,
    },
    {
        id:2,
      fname: "ahmad",
      lname: "ocean",
      age: 20,
      gender: "M",
      lastOrderDate: "2019-07-28",
      totalOrders: 10,
    },
    {
        id:4,
      fname: "abdullah",
      lname: "ocean",
      age: 30,
      gender: "M",
      lastOrderDate: "2019-08-28",
      totalOrders: 24,
    },
    {
        id:5,
      fname: "janbaz",
      lname: "ocean",
      age: 40,
      gender: "M",
      lastOrderDate: "2019-09-28",
      totalOrders: 55,
    },
    {
        id:6,
      fname: "shadman",
      lname: "ocean",
      age: 50,
      gender: "M",
      lastOrderDate: "2019-10-28",
      totalOrders: 60,
    },
    {
        id:7,
      fname: "waseem",
      lname: "ocean",
      age: 60,
      gender: "M",
      lastOrderDate: "2019-06-28",
      totalOrders: 77,
    },
    {
        id:8,
      fname: "shadab",
      lname: "ocean",
      age: 70,
      gender: "M",
      lastOrderDate: "2019-02-28",
      totalOrders: 88,
    },
    {
        id:9,
      fname: "akhtar",
      lname: "ocean",
      age: 80,
      gender: "M",
      lastOrderDate:"2019-01-28",
      totalOrders: 88,
    },
    {
        id:10,
      fname: "humaiyo",
      lname: "ocean",
      age: 90,
      gender: "M",
      lastOrderDate: "2019-06-28",
      totalOrders: 40,
    },
    {
        id:11,
      fname: "erin",
      lname: "ocean",
      age: 99,
      gender: "M",
      lastOrderDate: "2019-06-28",
      totalOrders: 20,
    },
  ];
  
let id = 4;
//read element from array


let findArrayMainFunn = (arr, id) => {
  let filtercallback = (element) => {
    let ans = element.id==id ? true : false;


    return ans;
  };

  return arr.find(filtercallback);
};

let findarrr = findArrayMainFunn(myUsers, id);
console.log("find arry")
console.log(findarrr);


  ///create element in an array
  let create_user=(user)=>{

  myUsers.push(user);
  
}
let user = {

    
        id:25,
      fname: "waqas",
      lname: "spider",
      age: 90,
      gender: "M",
      lastOrderDate: "2019-06-28",
      totalOrders: 117,
    
    
}
  let created= create_user(user);
  
  
  for (let i = 0; i < myUsers.length; i++) {
      
   
    console.log(myUsers[i].id);
          }

  ///update an element in an array
let idd=9;
  let user_update = {

    
    id:89,
  fname: "nasir",
  lname: "jamshad",
  


}


  let updatelement = (arr, user_update,idd) => {
    let filtercallback = (element,index) => {
      if(element.id==idd){

var update_obj={
    ...element,
    ...user_update
}
arr[index]=update_obj;
        return true;
      }
      else{
        return false;
      }
  
  
      
    };
  
    return arr.find(filtercallback);
  };
  
  let updatedelement = updatelement(myUsers, user_update,idd);
  console.log("updated object")
  console.log(myUsers);



  /////delete item in an array


let iddd=25;
let deleteinarr = (arr, id) => {
    let filtercallback = (element,index) => {
      if(element.id==id){

 
 arr.splice(index, 1);
return true;
      }
      else{
return false;
      }
      
  
  
      
    };
  
    return arr.find(filtercallback);
  };
  
  let deleteitem = deleteinarr(myUsers, iddd);
  console.log("delete item")
  console.log(deleteitem);

console.log("all users after deletion");
console.log(myUsers);


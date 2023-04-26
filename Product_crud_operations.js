const Product = [
    {
        id:1,
        Name:"Tshirt",
        Price:200,
        Quantity:400,
        Unit_price:100,


    }
  
   
  ];

///create a new object
  let createnewobject = (arr,obj)=>{
arr.push(obj);

  }

  ///read the object

  let readobject =(arr,id)=>{

let findobject=(element)=>{

return element.id=id?true:false;
}
return arr.find(findobject);
  }

  ////update object

  let updateobject=(arr,update_obj,id)=>{

let findobj = (element,index)=>{
    if(element.id==id){

        var obj={
            ...element,
            ...update_obj
        }
        arr[index]=obj;
        return true;
    }
    else{
        return false;
    }

}
return arr.find(findobj);

  }
  ////delete obj

  let deleobj=(arr,id)=>{



let finde=(element,index)=>{
    if(element.id=id){

        arr.slice(index,1);
        return true;
    }
    return false;

}

return arr.find(finde);


  }